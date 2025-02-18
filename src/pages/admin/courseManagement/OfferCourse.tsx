import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";


const OfferCourse = () => {
    const [data : academicFacultyData] = useGetAcademicFacultiesQuery(undefined);

    const academicSemesterOptions = academicFacultyData?.data?.map(item =>({
        value:item._id,
        label:item.name,
    }));

    const onSubmit =(data)=>{
        
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect 
                    label="Academic Semester" 
                    name="academicSemester" 
                    options={academicSemesterOptions}
                    />

                    <PHInput type="text" name="test" label="Test"/>
                    
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
             </Col>
       </Flex>
    );
};

export default OfferCourse;