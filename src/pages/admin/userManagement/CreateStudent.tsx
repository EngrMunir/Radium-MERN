import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../components/constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAcademicDepartmentsQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

const studentData = [1,2,3,4];

const CreateStudent = () => {

    const [addStudent, {data, error}] = useAddStudentMutation();

    console.log(data, error);

    const { data:sData, isLoading: sIsLoading }= useGetAllSemestersQuery(undefined);
    const { data:dData, isLoading: dIsLoading }= useGetAcademicDepartmentsQuery(undefined, {skip:sIsLoading});

    const semesterOptions = sData?.data?.map((item) => ({
        value: item._id,
        label:`${item.name} ${item.year}`,
    }))

    const onSubmit:SubmitHandler<FieldValues> = (data) =>{
        const studentData ={
            password:'student123',
            student: data
        }

        const formData = new  FormData();

        formData.append('data', JSON.stringify(studentData));

        addStudent(formData);

        // console.log(formData.get('something'));
        // console.log([...formData.entries()]);
        // ! This is for development just for checking
        console.log(Object.fromEntries(formData));
    }
    return (
        <Row>
            <Col span={24}>
            <PHForm onSubmit={onSubmit}>
                <Divider>Personal Info</Divider>
               <Row>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.firstName" label="First Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.middleName" label="Middle Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.lastName" label="Last Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect options={genderOptions} name="gender" label="Gender"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHDatePicker name="dateOfBirth" label="Date of birth"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect options={bloodGroupOptions} name="bloodGroup" label="Blood Group"/>
                    </Col>
               </Row>
                <Divider>Contact Info</Divider>
               <Row>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="email" label="Email"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="contact" label="Contact"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="emergencyContact" label="Emergency Contact"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="presentAddress" label="Present Address"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="permanentAddress" label="Permanent Address"/>
                    </Col>
               </Row>
                <Divider>Guardian</Divider>
               <Row>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="fatherName" label="Father Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="fatherOccupation" label="Father Occupation"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="fatherContactNo" label="Father ContactNo"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="motherName" label="Mother Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="motherOccupation" label="Mother Occupation"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="motherOccupation" label="Mother Occupation"/>
                    </Col>
               </Row>
                <Divider>Local Guardian</Divider>
               <Row>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.firstName" label="First Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.middleName" label="Middle Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="name.lastName" label="Last Name"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect options={genderOptions} name="gender" label="Gender"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHInput type="text" name="dateOfBirth" label="DOB"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect options={bloodGroupOptions} name="bloodGroup" label="Blood Group"/>
                    </Col>
               </Row>
                <Divider>Academic Info</Divider>
               <Row gutter={8}>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect disabled={sIsLoading} options={semesterOptions} name="admissionSemester" label="Admission Semester"/>
                    </Col>
                    <Col span={24} md={{span:12}} lg={{span:8}}>
                        <PHSelect disabled={dIsLoading} options={} name="academicDepartment" label="Admission Department"/>
                    </Col>
               </Row>
                <Button htmlType="submit">Submit</Button>
            </PHForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;