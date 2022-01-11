import React from 'react';
import './Landing.scss'
import { Button, Form } from 'react-bootstrap';

export default class Landing extends React.Component {
    state = {
        question: "",
    } 

    findAnswer() {
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
                            rows="3"
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