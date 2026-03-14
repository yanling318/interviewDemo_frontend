import React, {useEffect} from "react";
import {LineChart, Line, XAxis, YAxis, Bar} from "recharts";
import {useDispatch, useSelector} from "react-redux";
import {getInterview} from "../action/interviewAction";
import {getPie} from "../action/chartAction";
import {PieRechartComponent} from "./Pie";
import {ChartBar} from "./ChartBar";

export const Chart = () => {
    const dispatch = useDispatch();
    const interview = useSelector((state: any) => state.interview);
    useEffect(() => {
        //dispatch(getLine());
        dispatch(getPie());
    }, []);
    const pie = useSelector((state: any) => state.chart?.data);
    console.log(pie);
    const role =localStorage.getItem('role');
    return (
        <>
            { ((role ==='HR')?
                <div>
                    <h2>Interview Chart</h2>
                    <PieRechartComponent/>
                    <ChartBar/>
                </div>:<h3>you are not HR, you can not view the charts</h3>)
            }
        </>
    )
}