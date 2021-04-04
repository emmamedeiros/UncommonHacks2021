import os
import pywget

def main():
    # Pure happy path hard coded nonsense
    print("Downloading Art Institute data")
    os.system("rm -r ../test_data/artic/*")
    pywget.wget.download("https://artic-api-data.s3.amazonaws.com/artic-api-data.tar.bz2", "../test_data/artic/")
    os.system("tar -xvjf ../test_data/artic/artic-api-data.tar.bz2 -C ../test_data/artic/")

    print("Downloading The Met data")
    os.system("rm -r ../test_data/met/*")
    pywget.wget.download("https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv", "../test_data/met/")


if __name__ == "__main__":
    main()
