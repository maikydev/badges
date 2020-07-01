import React, { Component, Fragment } from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from "../components/Badge";
import BadgeForm from '../components/BadgeForm'


export default class BadgeNew extends Component {
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName= {this.state.form.firstName}
                                lastName= {this.state.form.lastName}
                                email= {this.state.form.email}
                                avatar="https://www.gravatar.com/avatar/c83ef6304a3f1074a42b802bcba80ad1"
                                jobTitle= {this.state.form.jobTitle}
                                twitter= {this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange= {this.handleChange} formValues= {this.state.form} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
