import React from 'react';

// Actions 
import { deletePost } from '../../actions/post.actions';

// Redux
import { useDispatch } from 'react-redux';

// Styles
import { Image } from 'react-bootstrap';

const DeleteCard = (props) => {
  const dispatch = useDispatch();
  const deleteMessage = () => dispatch(deletePost(props.id))

  return (

    <span
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce message?")) {
          deleteMessage();
        }
      }}
    >

      <Image
        className='mt-2'
        width={35}
        height={35}
        fluid={true}
        src="./img/icons/trash.svg" alt="edit"
      />

    </span>
  )
};

export default DeleteCard;
