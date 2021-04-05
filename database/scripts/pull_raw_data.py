import os
import pywget

path = os.path.dirname(os.path.abspath(__file__))

def main():
    # Pure happy path hard coded nonsense
    print("Downloading Art Institute data")
    os.system(f"rm -r {path}/../test_data/artic/*")
    pywget.wget.download("https://artic-api-data.s3.amazonaws.com/artic-api-data.tar.bz2", f"{path}/../test_data/artic/")
    os.system(f"tar -xvjf {path}/../test_data/artic/artic-api-data.tar.bz2 -C {path}/../test_data/artic/")

    print("Downloading The Met data")
    os.system(f"rm -r {path}/../test_data/met/*")
    pywget.wget.download("https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv", f"{path}/../test_data/met/")


if __name__ == "__main__":
    main()
