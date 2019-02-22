import pymongo
from pymongo import MongoClient
import pandas
import xlrd
client = MongoClient("mongodb://sanket95:sanket95@ds245250.mlab.com:45250/wordcollection")
db = client['wordcollection']
collection = db['Issues']
#print(collection)
device_1="Mobile"
device_2="Laptop"
data={}
df=pandas.read_excel("data.xlsx")
values_mobile=df['MOBILE_ISSUE'].values
values_laptop=df['LAPTOP_ISSUE'].values
mobile_I=[]
laptop_I=[]
for i in values_mobile:
    if(i!=0):    
        mobile_I.append(i)
for i in values_laptop:
    if(i!=0):
        laptop_I.append(i)


data={
"Device":device_1,
"model":mobile_I
}
collection.insert(data)
data={}

data={
        "Device":device_2,
        "model":laptop_I
    }
collection.insert(data)
print("DONE")
