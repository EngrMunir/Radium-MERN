import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({

    endpoints:(builder)=>({
            getAllRegisteredSemesters: builder.query({
                query:(args)=>{
                    const params = new URLSearchParams();
    
                    if(args){
                        args.forEach((item:TQueryParam)=>{
                            params.append(item.name, item.value as string);
                        })
                    }
                    
                    return { url:'/semester-registrations',
                    method:'GET',
                    params: {name:'Fall'}
                }
                },
                providesTags:['semester'],
                transformResponse:(response:TResponseRedux<TSemester[]>)=>{
                    console.log( response);
                    return {
                        data: response.data,
                        meta:response.meta,
                    };
                }
            }),
            addRegisteredSemester: builder.mutation({
                query:(data)=>({
                    url:'/semester-registrations/create-semester-registration',
                    method:'PATCH',
                    body:data,
                }),
                invalidatesTags:['semester']
            }),
            updateRegisteredSemester: builder.mutation({
                query:(args)=>({
                    url:`/semester-registrations/${args.id}`,
                    method:'POST',
                    body:args.data,
                }),
                invalidatesTags:['semester'],
            }),
            getAllCourses: builder.query({
                query:(args)=>{
                    const params = new URLSearchParams();
    
                    if(args){
                        args.forEach((item:TQueryParam)=>{
                            params.append(item.name, item.value as string);
                        })
                    }
                    
                    return { url:'/courses',
                    method:'GET',
                    params: {name:'Fall'}
                }
                },
                providesTags:['courses'],
                transformResponse:(response:TResponseRedux<any>)=>{
                    console.log( response);
                    return {
                        data: response.data,
                        meta:response.meta,
                    };
                }
            }),
            addCourse: builder.mutation({
                query:(data)=>({
                    url:`/courses/create-course`,
                    method:'POST',
                    body:data,
                }),
                invalidatesTags:['courses']
            }),
            addFaculties: builder.mutation({
                query:(args)=>({
                    url:`/courses/${args.courseId}/assign-faculties`,
                    method:'PUT',
                    body:args.data,
                }),
                invalidatesTags:['courses']
            })
        }),
});

export const { 
    useAddRegisteredSemesterMutation, 
    useGetAllRegisteredSemestersQuery,
    useUpdateRegisteredSemesterMutation,
    useGetAllCoursesQuery,
    useAddCourseMutation,
    useAddFacultiesMutation,
} = courseManagementApi;