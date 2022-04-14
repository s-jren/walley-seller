import React from "react";
import ButtonComponent from '../../shared/components/UIElements/Button';
import CardComponent from '../../shared/components/UIElements/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./myItems.css";

const MyItems = () => {
    return (
        <div>
        <h1 style={{marginTop:"10px"}}>My Items Page</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm-4"><CardComponent/></div>
                <div class="col-sm-4"><CardComponent/></div>
                <div class="col-sm-4"><CardComponent/></div>
                <div class="col-sm-4"><CardComponent/></div>
                <div class="col-sm-4"><CardComponent/></div>
                <div class="col-sm-4"><CardComponent/></div>
            </div>
        </div>
        </div>
    );
}

export default MyItems;