import React, { Component } from 'react'
import { Card, CardContent, styled} from '@material-ui/core'
import ReactLoading from 'react-loading';
import Carousel from 'react-material-ui-carousel'
import Round from './round'
import GetSchedule from '../../utils/getSchedule'

const MyCard = styled(Card)({
    background: '#574f7d85',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B',
    borderRadius: '1em'
});

export class scheduleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rSchedule: [],
            isLoading: false,
        };
    }
    componentWillMount(){
        this.setState({ isLoading: true });
        GetSchedule()
            .then(data => this.setState({ rSchedule: data, isLoading: false,}));
    }
    render() {
        const {rSchedule, isLoading} = this.state;
        if (isLoading) {
            return (
            <div id="card">
                <MyCard>
                    <div id="bg">                   
                        <ReactLoading type={"spinningBubbles"} color={'white'} height={'20%'} width={'20%'}/>
                    </div>    
                </MyCard>            
            </div>
            )
        }
        else
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>                    
                            <Carousel
                                next={ () => {/* Do stuff */} }
                                prev={ () => {/* Do other stuff */} }
                                indicators={false}
                                autoPlay={false}
                            >
                                {rSchedule.map(schedule => (
                                    <Round schedule={schedule}/>
                                ))}
                            </Carousel>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default scheduleCard
