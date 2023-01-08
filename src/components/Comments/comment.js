import { useEffect, useState } from 'react'
import moment from 'moment'

const Comment = (props) => {
 
    const { comment } = props
 
    const usermessage = {
        title: {
            textAlign: 'left',
            fontSize: '10px',
            fontWeight: 'bold',
        },
        comment: {
            fontSize: '15px',
            textAlign: 'left'
        },
        messageTime: {
            float: 'right',
            color: 'darkgray',
            fontSize: '10px'
        },
    }

    return (
        <div>


            <div className="row">
                <div class="card" 
                style={{ height: 'auto' }}
                >
                    <div class="card-body">


                        <p>

                            <p style={usermessage.title}>{comment.firstName} {comment.lastName} :
                            <p style={usermessage.comment}>{comment.comment}
                            <p style={usermessage.messageTime}> {moment(comment.createdTimestamp).fromNow()}</p></p></p>

                        </p>
                    </div>
                </div>

            </div>
    
        </div>
    )
}

export default Comment