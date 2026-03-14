import {BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend} from "recharts";
import {Component, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBar} from "../action/chartAction";

export const ChartBar = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(getLine());
        dispatch(getBar());
    }, []);
    const bar = useSelector((state: any) => state.bar?.data);
    console.log(bar);

    return (
        <BarChart
            width={500}
            height={300}
            data={bar}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rate" fill="#82ca9d" />
        </BarChart>
    );
}


