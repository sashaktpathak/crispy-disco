import React, { Component } from 'react';
import ContentBox from '../../components/ContentBox/ContentBox';
import DropDown from '../../components/DropDown/DropDown';
import CheckBox from '../../components/CheckBoxes/CheckBoxes';
import SpeedoMeter from '../../components/SpeedoMeter/SpeedoMeter';
import classes from './contentAnalyzer.module.css';
import axios from '../../axios';

const config = {

    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};


class ContentAnalyzer extends Component{
    state = {
        content: "",
        sources: [
            { value: 'unknown', label: 'Unknown' },
            { value: 'social', label: 'Social Media' },
            { value: 'news', label: 'News articles' },
            { value: 'rp', label: 'Published articles' },
        ],
        source: null,
        selectedAlgos: [],
        algos: [
            {
                algo: "LSTM",
                algoKey: 1
            },
            {
                algo: "Multinomial NB",
                algoKey: 2
            },
            {
                algo: "Passive Aggressive",
                algoKey: 3
            },
            {
                algo: "Logistic Regression",
                algoKey: 4
            },
            {
                algo: "BiLSTM",
                algoKey: 5
            },
            {
                algo: "Decision Tree",
                algoKey: 6
            },
            {
                algo: "Random Forest",
                algoKey: 7
            }
        ],
        prediction: 0,
    }
    render(){
        
        const handleTextChange = (e) => {
            this.setState({content: e.target.value});
        }

        const handleSourceChange = (e) => {
            this.setState({source: e.value});
        }

        const handleSelectChange = (e) => {
            let selectedValues = []
            e.forEach(data => {
                selectedValues.push(data.algoKey);
            });
            this.setState({selectedAlgos: selectedValues});
        }

        const handleAnalyze = () => {
            let payload = {
                content: this.state.content,
                source: this.state.source,
                algos: this.state.selectedAlgos
            }
            axios.post('/predictClass', payload, config)
            .then(response => {
                console.log("Response: ", response);
                if(typeof(response.data) === "object")
                    this.setState({prediction: response.data[0]})
                else
                    this.setState({prediction: parseFloat(response.data.slice(2,-2))})
            })
        }

        return (
            <div className={classes.ContentAnalyzer}>
                <div className={classes.heading}>Fake News Predictor</div>
                <div>
                    <div className={classes.componentBox}>
                        <div className={classes.label}>Content:</div>
                        <ContentBox 
                            text={this.state.content}
                            changeText={handleTextChange}
                        />
                    </div>
                    <div className={classes.componentBox}>
                        <div className={classes.label}>Source:</div>
                        <DropDown 
                            sources={this.state.sources}
                            source={this.state.source}
                            changeSource={handleSourceChange}
                        />
                    </div>
                    <div className={classes.componentBox}>
                        <div className={classes.label}>Algorithms:</div>
                        <CheckBox 
                            selectChange={handleSelectChange}
                            selectedValues={this.state.selectedAlgos}
                            values={this.state.algos}
                        />
                    </div>

                    <div className={classes.componentBox}>
                        <div className={classes.label}>Prediction:</div>
                        <SpeedoMeter
                            value={this.state.prediction}
                        />
                    </div>
                </div>
                <div className={classes.analyzeButton} onClick={handleAnalyze}>Analyze</div>
            </div>
        );
    }
}

export default ContentAnalyzer;