import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagementApi";
import moment from "moment";
import { TSemester } from "../../../types";
import { useState } from "react";


export type TTableData = Pick<TSemester, "startDate"|"endDate"|'status'>

const items =[
  {
    label:"Upcoming",
    key:'UPCOMING',
  },
  {
    label:"Ongoing",
    key:'ONGOING',
  },
  {
    label:"Ended",
    key:'ENDED',
  },
];


const RegisteredSemesters = () => {
//   const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
const { data: semesterData, isFetching } = useGetAllRegisteredSemestersQuery(undefined);
const [semesterId, setSemesterId] = useState('');
 
const [updateSemesterStatus] = useUpdateRegisteredSemesterMutation();

  const tableData = semesterData?.data?.map(({_id, academicSemester, startDate, endDate, status }) => ({
        key:_id,
        name: `${academicSemester.name} ${academicSemester.year}`,
        startDate: moment(new Date(startDate)).format('MMMM'),
        endDate:  moment(new Date(endDate)).format('MMMM'),
        status
    }))

    const handleStatusUpdate=(data)=>{
      console.log('semester', semesterId);
      console.log('newStatus', data.key);

      const updateData ={
        id:semesterId,
        data:{
          status: data.key,
        }
      }
      updateSemesterStatus(updateData);
    }
    const menuProps ={
      items,
      onClick: handleStatusUpdate,
    }
    const columns: TableColumnsType<TTableData> = [
        {
          title: 'Name',
          key:'name',
          dataIndex: 'name',
        },
        {
          title: 'Status',
          key:'status',
          dataIndex: 'status',
          render: (item)=>{
            let color;
            if(item ==='UPCOMING'){
              color='blue'
            }
            if(item ==='ONGOING'){
              color='green'
            }
            if(item ==='ENDED'){
              color='red'
            }
            return <Tag color={color}>{item}</Tag>
          }
        },
        {
          title: 'Start Date',
          key:'startDate',
          dataIndex: 'startDate',
        },
        {
          title: 'End Date',
          key:'endDate',
          dataIndex: 'endDate',
        },
        {
          title:'Action',
          key:'X',
          render: (item)=> {
            return (
            <Dropdown menu={menuProps} trigger={['click']}>
              <Button onClick={()=> setSemesterId(item.key)}>Update</Button>
            </Dropdown>
            )
          }
        }
      ];
     
    //   const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    //     if(extra.action ==='filter'){
    //       const queryParams: TQueryParam[] =[];
    //       setParams(queryParams)
    //     }
    //   };

    return (
      <Table 
      loading={isFetching} 
      columns={columns} 
      dataSource={tableData} 
    //   onChange={onChange} 
      />
    );
};
export default RegisteredSemesters;