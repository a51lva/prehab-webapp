import React, {Component} from "react";
import "../../styles/patientInfo_style.css";
import { Link } from "react-router-dom"

class PatientInfo extends Component{

    constructor(props){
        super(props);
        this.state = {
            info: this.props.info,
            term: '',
        }
    }

    render(){

        let info = this.state.info.data;
        let constraints = info.constraints;
        let doctors = info.doctors_associated;

        let data = {
            patient_tag: this.state.info.data.patient_tag,
        };

        if(info.sex === "F"){
            info.sex = "Feminino";
        }else{
            info.sex = "Masculino";
        }

        return (
        <div className="row">
            <div className="col-md-9">

                <div className="row">
                    <p className="patientNameLabel"> {info.patient_tag}</p>
                </div>
                <div className="row ">
                    <div className="col-md-12">
                        <p className="doctorNameLabel"> Informação Pessoal </p>
                    </div>
                    <div className="doctorName col-md-2">
                        <p className="emailLabel"> {info.sex}</p>
                    </div>
                    <div className="doctorName col-md-2">
                        <p className="emailLabel"> {info.age} anos</p>
                    </div>
                    <div className="doctorName col-md-2">
                        <p className="emailLabel">  {info.weight} kg</p>
                    </div>
                    <div className="doctorName col-md-2">
                        <p className="emailLabel">  {info.height} cm</p>
                    </div>
                </div>


                <div className="row">
                    {constraints.map( (row) => (
                        <div className="doctorName col-md-2 constraint">
                            <p className="constraint">{row.title}</p>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p className="doctorNameLabel"> Médicos </p>
                    </div>
                    {doctors.map( (row) => (
                        <div className="doctorName col-md-2">
                            <p className="emailLabel"> {row.name}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="col-md-3">
                <div className="text-right " style={{marginTop: '90px'}}>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Link to="/newPrehab" style={{textDecoration: 'none' }} {...data}>
                                <div className="botaoMais">+</div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                             <p className="addPatientLabel">Criar Prehab</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }

    filterList (event) {
        this.setState({term: event.target.value});
    }
}
export default PatientInfo