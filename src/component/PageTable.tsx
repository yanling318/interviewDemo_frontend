import React, {SyntheticEvent, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Table, Input, InputNumber, Popconfirm, Form, Typography} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {editInterview, getInterview, uploadData, uploadResume} from "../action/interviewAction";
import download from "../svg/download-solid.svg";
import view from "../svg/eye-solid.svg";
import upload from "../svg/upload-solid.svg";
import '../css/css.scss'
import {appConstants} from "../constants/constants";
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";

const EditableCell = ({
                          editing,
                          dataIndex,
                          title,
                          inputType,
                          record,
                          index,
                          children,
                          ...restProps
                      }: any) => {
    const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

export const EditTable = (props: RouteComponentProps) => {
    // const originData = [];
    //
    // for (let i = 0; i < 100; i++) {
    //     originData.push({
    //         key: i.toString(),
    //         name: `Edrward ${i}`,
    //         age: 32,
    //         address: `London Park no. ${i}`,
    //         id:i,
    //     });
    // }

    const [form] = Form.useForm();
    //const [data, setData] = useState(originData);
    const interview = useSelector((state: any) => state?.interview);

    const [state, setState] = useState();
    const dispatch = useDispatch()


    // useEffect(()=>{
    //     setState(interview);
    // },[state===null]);

    const [editingKey, setEditingKey] = useState('');
    const [search, setSearch] = useState('');

    const isEditing = (record: any) => record.key === editingKey;
    const [data, setData] = useState(null);
    const [flag,setFlag] = useState('false');
    const [flag1,setFlag1] = useState('false');
    //const [interviewList,setInterviewList] = useState(interview);

    useEffect(() => {
        dispatch(getInterview());
        setState(interview);
       // setTimeout(() => {setFlag('false')}, 2.0*1000);
        setFlag('false');
    }, [(interview === null || flag ==='true')]);

    useEffect(() => {
        dispatch(getInterview());
        setState(interview);
        setFlag1('false');
    }, [(interview === null || flag1 ==='true')]);


    const add = useSelector((state1:any)=> state1.add?.success)
   // const flagg =localStorage.getItem('flag')
   // console.log(add);
    // useEffect(() => {
    //     dispatch(getInterview());
    //     //localStorage.setItem('flag','false');
    //     setTimeout(() => {setFlag('false')}, 1.0*1000);
    //     console.log("!!!!!!!!!!!!!!");
    //     setFlag('false');
    //     },[add==='true']);


    // const edit = (record:any) => {
    //     form.setFieldsValue({
    //         time: '',
    //         candidate: '',
    //         phone: '',
    //         id:'',
    //         scheduler:'',
    //         status:'',
    //         ...record,
    //     });
    //     setEditingKey(record.key);
    // };


    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '5%',
            editable: true,
            sorter: {
                compare: (a: any, b: any) => a.id - b.id,
            },
        },
        {
            title: 'Time',
            dataIndex: 'time',
            width: '20%',
            editable: true,
            sorter: {
                compare: (a: any, b: any) => new Date(a.time )< new Date(b.time)? -1 : 1,
            },
        },
        {
            title: 'Candidate',
            dataIndex: 'candidate',
            width: '15%',
            editable: true,
            sorter: {
                compare: (a: any, b: any) => a.candidate < b.candidate ? -1 : 1,
            },
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            width: '20%',
            editable: true,
            sorter: {
                compare: (a: any, b: any) => a.phone < b.phone ? -1 : 1,
            },
        },
        {
            title: 'Scheduler',
            dataIndex: 'scheduler',
            width: '10%',
            editable: true,
            sorter: {
                compare: (a: any, b: any) => a.scheduler < b.scheduler ? -1 : 1,
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '10%',
            editable: true,
            render: (_: any, record: any) => {
                const selectHandler = (event: SyntheticEvent) => {
                    const value = (event.target as HTMLSelectElement).value;
                    record.status = value;
                    console.log(record);
                    dispatch(editInterview(record));
                };
                return (
                    <div>
                        <label>{record.status}</label><br/>
                        {
                            (role ==='HR' || role ==='Trainer')&&
                            <select onChange={selectHandler}>
                                <option></option>
                                <option>Pending</option>
                                <option>Fail</option>
                                <option>Pass</option>
                                <option>Canceled</option>
                            </select>
                        }
                    </div>
                )
            }
        },
        {
            title: 'Resume',
            dataIndex: 'Resume',
            editable: true,
            render: (_: any, record: any) => {
                const role =localStorage.getItem('role');

                const viewHandler = (event:SyntheticEvent) => {

                };
                const uploadHandler = (event: SyntheticEvent) => {
                    //@ts-ignore
                    let value = (event.target as HTMLInputElement).files[0];
                    //console.log(value);
                    //@ts-ignore
                    setData(value);
                };
                const submitHandler =(event:SyntheticEvent)=>{
                    const dataArray = new FormData();
                    // @ts-ignore
                    dataArray.append('file', data);
                    console.log(dataArray);
                    dispatch(uploadResume(record?.id,dataArray))
                    setFlag('true');
                    setTimeout(() => {setFlag('true')}, 1.0*1000);
                }
                const downloadHandler = () => {
                };
                return (
                    (role ==='HR' || role ==='Trainer')&&
                    <div>
                        {
                            record?.resume &&<div>
                            <img className='img' onClick={viewHandler}
                                 style={{width: "20px", height: "20px", marginRight: "20px"}} src={view}/>
                                <a download href={"http://127.0.0.1:8090/" + record?.resume}>view/download</a></div>
                        }
                        {/*<form encType="multipart/form-data" onClick={submitHandler}>*/}
                        <input  type="file" name="file" onChange={uploadHandler} multiple/><br/><br/>
                        {/*<button onClick={submitHandler} className='btn btn-dark'  type="submit" value="Submit">submit</button>*/}
                        <img className='img' onClick={submitHandler} style={{width: "20px", height: "20px", marginRight: "20px"}} src={upload} />

                        {/*<img className='img' onClick={downloadHandler}*/}
                        {/*     style={{width: "20px", height: "20px", marginRight: "20px"}} src={download}/>*/}
                    </div>
                )
            }
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record: any) => ({
                record,
                //inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const clickHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const values = (event.target as HTMLButtonElement).value;
        if (values === 'All Appointment') {
            setState(interview);
        } else {
            let temp = interview?.filter((i: any) => {
                return i.status === values;
            });
            setState(temp);
        }
    };

    const changeHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const value = (event.target as HTMLInputElement).value;
        if (value === " ") {
            setState(interview);
        } else {
            if (isNaN(Number(value))) {
                const a = interview.filter((i: any) => {
                    return i.candidate.startsWith(value);

                });
                setState(a);
            } else {
                const b = interview.filter((i: any) => {
                    return i.phone.startsWith(value);
                });
                setState(b);
            }
        }
        setSearch(value);
    };
    // const submitHandler=(event:SyntheticEvent)=>{
    //     event.preventDefault();
    //     if(search===""){
    //         setState(interview);
    //     }else{
    //         if(isNaN(Number(search))){
    //          interview.map((i:any)=>{
    //              return i.candidate === search;
    //          })
    //         }else {
    //             interview.map((i:any)=>{
    //                 return i.phone === search;
    //             })
    //         }
    //     }
    // };
    //accept="xlsx/*,.xlsx"
    const uploadDataHandler = (event: SyntheticEvent) => {
        //@ts-ignore
        let value = (event.target as HTMLInputElement).files[0];
        //@ts-ignore
        setData(value);
    };
    const submitDataHandler =(event:SyntheticEvent)=>{
        const dataArray = new FormData();
        // @ts-ignore
        dataArray.append('file', data);
        dispatch(uploadData(dataArray));

        setTimeout(() => {setFlag1('true')}, 2.0*1000)
    };
    const newInterview=()=>{
        props.history.push(appConstants.newInterviewRoute);
    };
    const role =localStorage.getItem('role');
    return (
        <div>
            <button className="btn btn-light" value='All Appointment' onClick={clickHandler}>All Appointment</button>
            <button className="btn btn-light" value='Pending' onClick={clickHandler}>Pending</button>
            <button className="btn btn-light" value='Canceled' onClick={clickHandler}>Canceled</button>
            <button className="btn btn-light" value='Pass' onClick={clickHandler}>Passed</button>
            <button className="btn btn-light" value='Fail' onClick={clickHandler}>Failed</button>
            <button className="btn btn-primary" onClick={(event:SyntheticEvent)=>{
               props.history.push(appConstants.chartRoute);
            }}>Chart</button>
            {
                (role==='HR')? <div>
                <input name='file' type='file' onChange={uploadDataHandler}/>
                < img className='img' onClick={submitDataHandler} style={{width: "20px", height: "20px", marginRight: "20px"}} src={upload} />
                </div>:null
                }
            <form>
                <label>Enter Name/Phone</label>
                <input onChange={changeHandler}/>
            </form>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={state}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                />
            </Form>

                    {/*<button  onClick={newInterview}>New Interview</button>*/}
            {
                (role ==='HR')&&
                <a href="http://localhost:8080/excel" download>Export to Excel</a>

            }
        </div>
    );
};
