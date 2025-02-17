import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<TStudent, 'fullName'|'id'>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const  { data: studentData, isFetching,
    } = useGetAllStudentsQuery([
        { name:'limit', value:3},
        { name: 'page', value: page },
        { name: 'sort', value: "id"},
        ...params]);

        const metaData = studentData?.meta;

  const tableData = studentData?.data?.map(({_id, fullName, id }) => ({
        key:_id,
        fullName,
        id,
    }))

    const columns: TableColumnsType<TTableData> = [
        {
          title: 'Name',
          key:'name',
          dataIndex: 'fullName',
        },
        {
          title: 'Roll No.',
          key:'id',
          dataIndex: 'id',
        },
        {
          title:'Action',
          key:'X',
          render: ()=> {
            return( 
            <Space>
                <Button>Details</Button>
                <Button>Update</Button>
                <Button>Block</Button>
            </Space>
            );
          },
          width:"10%"
        }
      ];
     
      const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        if(extra.action ==='filter'){
          const queryParams: TQueryParam[] =[];
          filters.name?.forEach(item =>(
            queryParams.push({name:'name', value:item})
          ))
          filters.year?.forEach(item =>(
            queryParams.push({name:'year', value:item})
          ))
          setParams(queryParams)
        }
      };

      // if(isLoading){
      //   return <p>Loading</p>
      // }
    return (
      <>
        <Table 
        loading={isFetching} 
        columns={columns} 
        dataSource={tableData} 
        onChange={onChange}
        pagination={false}
         />
         <Pagination onChange={(value) => setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
      </>
    );
};

export default StudentData;