import React, {useState, useEffect} from 'react'
import './StudentProfile.css';
import { Navigate, useNavigate } from 'react-router-dom';
import avatar from '../../img/user.png';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../../redux/axios-interceptor';



export default function StudentProfile() {
  let url;
  const { id, role } = useParams();
  const user= useSelector((state)=> state.login?.currentUser);
  const [student, setStudent] = useState(null);
  const [editable, setEditable] = useState(false); // Thêm state để theo dõi chế độ chỉnh sửa
  let mainavatar="";
  if (role == "student" ) {
    url = `http://localhost:3001/v1/student/getStudent/`;
  }
  else if(role == "myprofile"){
   
    if(user?.position=="student")
    
    url = `http://localhost:3001/v1/student/getStudentID/`;
    else  if(user?.position=="lecturer")
    url = `http://localhost:3001/v1/lecturer/getLecturerID/`;
  }
  else {
    url = 'http://localhost:3001/v1/lecturer/getLecturer/';
  }
  const handleEdit = () => {
    setEditable(!editable); // Khi bấm vào nút "Tùy chỉnh", cập nhật trạng thái "editable" ngược lại với giá trị hiện tại
  };
  useEffect(() => {
    axios
      .get(url+ id)
      .then((response) => {
        const studentData = response.data;
        mainavatar= "http://localhost:3001/uploads/"+studentData.id;
        console.log(mainavatar)
        setStudent(studentData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (

    <div className='Profile_wrapper'>
        <div className='Title'>THÔNG TIN {(role == "student") ? "SINH VIÊN" : "GIẢNG VIÊN" }</div>
        <div className='Student_wrapper'>
            <img className='Avatar_Profile' src={"http://localhost:3001/uploads/"+student.id} alt="Avatar Profile"/>
            <div className='Name_ID_wrapper'>
                <div className='Student_name'>{student.name}</div>
                <div className='Student_ID'>{student.id} | Sinh viên</div>
            </div> 
        </div>
        <div className='Info_Wrapper'>
          <div className='Edit_btn_profile_wrapper'>
          <div className='Edit_btn_profile btn_radius' onClick={handleEdit}>
            <b>{editable ? 'Lưu' : 'Tùy chỉnh'}</b>
          </div>
        </div>
          <div className='Info_Profile'>
            <div className='Text_Info_first'>Họ và tên: {student.name || null} </div>
            <div className='Text_Info'>Giới tính: {student.sex || null} </div>
            <div className='Text_Info'>Ngày, tháng, năm sinh: {student.dob || null} </div>
            <div className='Text_Info'>Email: {student.email || null} </div>
            <div className='Text_Info'>Điện thoại: {student.phone_num || null} </div>
            <div className='Text_Info'>Khoa: {student.department_id?.name || null} </div>
            <div className='Text_Info'>Ngành học: {student.major|| null}</div>
            <div className='Text_Info'>Lớp học: {student.acclass_id?.name || null}</div>
            <div className='Text_Info_final'> Địa chỉ tạm trú: {student.address || null}<br></br>
            <label> 
                <input type="checkbox" disabled={!editable}></input>
                <span class="checkmark"></span>
                Ký túc xá ĐHQG - HCM<br></br>
            </label>
            <label>
                <input type="checkbox" disabled={!editable}></input >
                <span class="checkmark"></span>
                Khác
            </label>
            <div className='Info_Bar_Wrapper'>
              <div className='Info_Bar'>
                Nơi sinh: <br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                CMND/CCCD: <br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div><div className='Info_Bar'>
                Ngày cấp CMND/CCCD:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Nơi cấp CMND/CCCD:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Dân tộc:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Tôn giáo:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Thông tin ngân hàng:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Số tài khoản:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>
              <div className='Info_Bar'>
                Chi nhánh:<br></br>
                <input className='Infobar-input' type='text' readOnly={!editable}/>
              </div>  
            </div>                                                                                         
          </div>
        </div>
      </div>
    </div>
  )
}
