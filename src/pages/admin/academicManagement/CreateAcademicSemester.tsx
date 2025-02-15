import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../components/constants/semester";
import { monthOptions } from "../../../components/constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const nameOptions =[
    {
        value:'01',
        label:'Autumn',
    },
    {
        value:'02',
        label:'Summer',
    },
    {
        value:'03',
        label:'Fall',
    },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2,3,4].map(number => ({
    value:String(currentYear+number),
    label:String(currentYear+number)
}));

const CreateAcademicSemester = () => {
    const onSubmit : SubmitHandler<FieldValues>=(data)=>{

        const name = nameOptions[Number(data.name)-1]?.label;

        const semesterData ={
            name,
            code:data.name,
            year:data.year,
        }

        console.log(semesterData);
    };
    
    const academicSemesterSchema =z.object({
        name: z.string({required_error:"Please select a Name"}),
        year: z.string({required_error:"Please select a Year"}),
        startMonth: z.string({required_error:"Please select a Start Month"}),
        endMonth: z.string({required_error:"Please select a End Month"})
    });

    return (
       <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}
                 resolver={zodResolver(academicSemesterSchema)}>
                    <PHSelect label="Name" name="name" options={semesterOptions}/>
                    <PHSelect label="Year" name="year" options={yearOptions}/>
                    <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
                    <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
                    <Button htmlType="submit">Submit</Button>
                </PHForm>
             </Col>
       </Flex>
    );
};

export default CreateAcademicSemester;