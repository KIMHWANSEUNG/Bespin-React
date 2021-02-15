import React, { Component } from 'react';

class Customer extends Component{
    render(){
        const customer = 
        [
            {
            'id':'1',
            'image':'https://placeimg.com/64/64/1',
            'name':'김환승',
            'birthday':'960703',
            'gender':'남자',
            'job':'회사원'
        },
        {
            'id':'2',
            'image':'https://placeimg.com/64/64/2',
            'name':'김환승',
            'birthday':'960703',
            'gender':'남자',
            'job':'회사원'
        },
        {
            'id':'3',
            'image':'https://placeimg.com/64/64/3',
            'name':'김환승',
            'birthday':'960703',
            'gender':'남자',
            'job':'회사원'
        }
    ]
        return(
            <div>
                {
                    customer.map(c => {
                        return(
                        <div>
                        <CustomerProfile id={c.id} image={c.image} name={c.name}/>
                        <CustomerInfo birthday={c.birthday} gender={c.gender} job={c.job} />
                        </div>);

                    })
                }
                
            </div>
        )
    }
}

class CustomerProfile extends Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;