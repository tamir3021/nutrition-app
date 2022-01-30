import React from 'react';
import './Landing.scss'
import { Button, Form } from 'react-bootstrap';

interface LandingState {
    question: string;
    keywords: string[];
}

export default class Landing extends React.Component {
    state: LandingState = {
        question: "",
        keywords: [],
    } 

    componentDidMount() {
        const keywords = this.getKeyWords();
        this.setState({
            keywords
        })
    }

    getKeyWords(): string[] { //TODO: update to HTTP call
        return [
            "nausea",
            "constipation",
            "high blood pressure"
        ]
    }

    findAnswer() {
        //TODO: handle question and keywords here
        console.log(this.state.question);
    }

    render() {
        return (
            <div>
                <p>Please ask a question related to your condition</p>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Your question"
                            as="textarea"
                            rows={3}
                            value={this.state.question}
                            onChange={e => this.setState({question: e.target.value})} />
                    </Form.Group>
                    <Button  type="button" className="question-submit" onClick={() => this.findAnswer()}>
                        Ask away
                    </Button>
                </Form>
            </div>
        )
    }
}