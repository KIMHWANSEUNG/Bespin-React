import { TableBody, TableCell, TableHead ,TableRow,Table,Paper} from '@material-ui/core';
import React from 'react'
import { Component } from 'react';
import Customer from './components/Cusomer.js'
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table:{
        minWidth:1080
    }
})

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
class Home extends Component{
    render(){
    const {classes} = this.props
        return(
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                        customer.map(c =>{
                            return(
                                <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.name}
                                gender={c.gender}
                                job={c.job}
                                />
                            );
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(Home);