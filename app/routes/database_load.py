import pymongo
from pymongo import MongoClient
import pandas
import xlrd
client = MongoClient("mongodb://sanket95:sanket95@ds245250.mlab.com:45250/wordcollection")
db = client['wordcollection']
collection = db['Models']
#print(collection)
device_1="Mobile"
device_2="Laptop"
data={}
df=pandas.read_excel("data.xlsx")
values_mobile=df['MOBILE'].values
values_laptop=df['LAPTOP'].values
mobile=[]
laptop=[]
for i in values_mobile:
    mobile.append(i)
for i in values_laptop:
    if(i!=0):
        laptop.append(i)


data={
"Device":device_1,
"model":mobile
}
collection.insert(data)
data={}

data={
        "Device":device_2,
        "model":laptop
    }
collection.insert(data)
print("DONE")
