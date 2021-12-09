import "./admincontentheader.css";
import { useState } from "react";


export default function AdminContentHeader() {
    const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="main-content-header">
      <h3>All Posts posted either via wordpress or gracesoft</h3>
      <div>
        <input type="radio" id="tab1" className="tab" {...activeTab === "tab1" ? "checked" : ""}/>
        <label htmlFor="tab1">
          <i class="fa fa-code"></i> All Posts
        </label>
        <input type="radio" id="tab2" className="tab"/>
        <label htmlFor="tab2">
          <i class="fa fa-code"></i> Categories
        </label>
        <input type="radio" id="tab3" className="tab"/>
        <label htmlFor="tab3">
          <i class="fa fa-code"></i> Devidends
        </label>
      </div>
    </div>
  );
}
