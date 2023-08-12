import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';
import Video from './video';
// import WebcamDemo from './FaceDetection';;

const ModalFaceSearch = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [full_name, setFullName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [introduction, setIntroduction] = useState("");


    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const handleCapture = (img) => {
        setShowModal(false);
        setImage(img);
    };
    const handleShow = () => setShowModal(true);

    return <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Face search: </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='body-add-new'>
                    <div className="mb-3">
                        <label className="form-label">Picture: </label>
                        <Button variant="primary" onClick={handleShow}>Take photo</Button>
                        {showModal && <Video show={showModal} onHide={handleCapture} />}
                        {/* <WebcamDemo /> */}
                        {image && (
                            <div>
                                <img src={image} alt="Captured" style={{ width: '100%' }} />
                            </div>
                        )}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={() => handleSaveUser()}>
                    Save
                </Button> */}
            </Modal.Footer>
        </Modal>
    </>
}

export default ModalFaceSearch;