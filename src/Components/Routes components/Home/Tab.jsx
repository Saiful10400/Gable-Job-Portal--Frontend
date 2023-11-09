import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";

const ReactTab = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get("https://assingment11.vercel.app/Get_All_Jobs")
        .then(res=>setData(res.data))
    },[])

    const onsite=data.filter(item=>item.catagory==="On Site")
    const Remote=data.filter(item=>item.catagory==="Remote")
    const PartTime=data.filter(item=>item.catagory==="Part-Time")
    const Hybrid=data.filter(item=>item.catagory==="Hybrid")
    
  return (
    <div className="lg:w-[1400px] mx-auto">
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Part-Time</Tab>
          <Tab>Hybrid</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            data.map(item=><TabCard key={item._id} item={item}></TabCard>)
          }
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            onsite.map(item=><TabCard key={item._id} item={item}></TabCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            Remote.map(item=><TabCard key={item._id} item={item}></TabCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            PartTime.map(item=><TabCard key={item._id} item={item}></TabCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
            Hybrid.map(item=><TabCard key={item._id} item={item}></TabCard>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
