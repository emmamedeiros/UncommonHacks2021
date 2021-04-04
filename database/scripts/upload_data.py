import jsonlines
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(
    'cockroachdb://backend@23.239.17.145:26257/uncommon',
    echo=True   
)

def get_artic():
    rows = []
    # Read all artworks, line by line
    with jsonlines.open('../test_data/artic/artic-api-data/getting-started/allArtworks.jsonl') as reader:
        for obj in reader:
            try:
                newRow = {
                    'uid': f"artic_{obj['id']}",
                    'org_id': obj['id'],
                    'title': obj['title'],
                    'artist': obj['artist_title'],
                    'year': int(obj['main_reference_number'][0:4]),
                    'display_date':  obj['main_reference_number'],
                    'type': obj['department_title'],
                    'org': 'artic',
                    'display_org': 'Art Institute of Chicago'
                }
                rows.append(newRow)
            except:
                # If it doesn't have an author, we probably don't want it
                pass
    
    return(pd.DataFrame(rows))


def get_met():
    met_raw = pd.read_csv('../test_data/met/MetObjects.csv', low_memory=False)

    # Simple data cleaning
    met = met_raw[['Object ID','Title','Artist Display Name', 'Object End Date', 'Object Date','Object Name']]
    met.columns = ['org_id', 'title', 'artist', 'year', 'display_date', 'type']
    met = met.assign(
        org = "met",
        display_org = 'Metropolitan Museum of Art'
    )
    uids = met['org_id'].apply(str).apply(lambda x: f'met_{x}')
    met.insert(0, 'uid', uids)

    return(met)


def main():
    print(engine)
    print('Cleaning Art Institute data')
    df_artic = get_artic()

    # print('Cleaning Met data')
    # df_met = get_met()

    df_all = pd.concat([df_artic])
    print('Uploading to CockroachDB')
    df_all.to_sql('artworks', con=engine, if_exists='replace', method='multi', chunksize=50000)
    

if __name__ == "__main__":
    main()
