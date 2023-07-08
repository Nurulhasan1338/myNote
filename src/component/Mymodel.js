import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Edit from "./Edit.js"
import { CssVarsProvider } from '@mui/joy/styles';



export default function Mymodel(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <CssVarsProvider defaultMode="system">
      <Button variant="outline" color="info" onClick={() => setOpen(true)}>
      <i className="fa-solid fa-eye" style={{"color": "#1f242e"}}></i>
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 800,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
             <span className="badge bg-secondary" style={{fontSize:"20px", position: "relative" ,top: "-35px", left: "-40px"}} >{props.tag}</span>
            <div className='d-flex justify-content-between'>
           {props.title}  
           <Edit id = {props.id} title = {props.title} tag = {props.tag} description = {props.description} color = {props.color}/>
           
      </div>
          </Typography>
          <Typography className="Text" id="modal-desc" textColor="text.tertiary">
           {props.description}
         
          </Typography>
        </Sheet>
      </Modal>
      </CssVarsProvider>
    </React.Fragment>
  );
}
