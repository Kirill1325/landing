import { Advantages } from "../entities/Advantages"
import { Header } from "../widgets/Header"
import { SmartphoneList } from "../widgets/SmartphoneList"
import { WorkProcess } from "../widgets/WorkProcess"
import samsungfront from '../assets/samsungfront.png'
import bigVector1 from '../assets/bigVector1.png'
import bigVector2 from '../assets/bigVector2.png'
import bigVector3 from '../assets/bigVector3.png'
import './App.scss'
import { Services } from "../widgets/Services"
import { Description } from "../widgets/Description"
import { Contacts } from "../widgets/Contacts"
import { Reviews } from "../widgets/Reviews"
import { Consultation } from "../widgets/Consultation"
import { Text } from "../widgets/Text"
import { Footer } from "../widgets/Footer"
import { FooterNav } from "../entities/FooterNav"
import { BasicModal, RepairModal, ServiceModal } from "../widgets/Modal"
import { useAppDispatch, useAppSelector } from "./store"
import { Modal } from "@mui/material"
import { toggleBasicModal, toggleRepairModal, toggleServiceModal } from "../widgets/Modal/model/modalSlice"
import { SubmittedModal } from "../widgets/SubmittedModal"
import { toggleSubmittedModal } from "../widgets/SubmittedModal/model/submittedModalSlice"


function App() {
  
  const { basicModal, repairModal, serviceModal } = useAppSelector(state => state.modalSlice)
  const { submittedModal } = useAppSelector(state => state.submittedModalSlice)

  const dispatch = useAppDispatch()

  return (
    <div className="App" >

      <Modal
        open={basicModal}
        onClose={() => dispatch(toggleBasicModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <BasicModal />
        </div>
      </Modal>

      <Modal
        open={repairModal}
        onClose={() => dispatch(toggleRepairModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <RepairModal />
        </div>
      </Modal>

      <Modal
        open={serviceModal}
        onClose={() => dispatch(toggleServiceModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <ServiceModal />
        </div>
      </Modal>

      <Modal
        open={submittedModal}
        onClose={() => dispatch(toggleSubmittedModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <SubmittedModal />
        </div>
      </Modal>

      <img src={samsungfront} alt="samsungfront" className="samsungfront" />
      <img src={bigVector1} alt="bigVector1" className="bigVector1" />
      <img src={bigVector2} alt="bigVector2" className="bigVector2" />
      <img src={bigVector3} alt="bigVector1" className="bigVector3" />

      <Header />
      <Advantages />

      <div className="background">
        <WorkProcess />
        <SmartphoneList />
        <Services />
      </div>

      <Description />
      <Contacts />
      <Reviews />
      <Consultation />
      <Text />
      <FooterNav />
      <Footer />
    </div>
  )
}

export default App
