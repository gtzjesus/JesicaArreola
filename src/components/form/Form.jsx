// ------------------------------
// File: Form.js
// ------------------------------
// Description: React component the form to Contact WorldHello.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

// import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../ui/buttons/Button';
import { useState } from 'react';
import Spinner from '../../ui/spinners/Spinner';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

// const ModalNav = styled.div`
//   // Logic for arranging children
//   display: flex;
//   // Code logic for aligning vertically
//   align-items: center;
//   // Code logic for aligning horizontally
//   justify-content: space-between;

//   // UI
//   // Code logic for title element
//   font-size: var(--font-small);
//   letter-spacing: var(--spacing-subtitle);
//   // Code logic shadow beneath text (more visibility)
//   /* text-shadow: var(--text-shadow-font); */
//   text-transform: uppercase;

//   // Code logic for margin from form in modal
//   margin-bottom: var(--margin-form);
//   padding: var(--padding-modal-nav);
// `;

// const ModalTitle = styled.span`
//   font-size: var(--font-xxsmall);
// `;

const StyledForm = styled.form`
  padding: var(--padding-large) var(--padding-medium);
  font-size: var(--font-form);
  color: var(--color-black);

  // Minimum height for each modal content
`;

const FormTitle = styled.span`
  font-size: var(--font-large);
`;

const FormSubTitle = styled.span`
  font-size: var(--font-xsmall);
`;

const Icon = styled.img`
  height: var(--logo-height);
  padding-right: var(--padding-xxsmall);
`;

const FormGroup = styled.div`
  margin-bottom: var(--margin-form);
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HorizontalGroup = styled.div`
  gap: var(--gap-form);
`;

const Label = styled.label`
  float: left;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Select = styled.select`
  max-width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  /* Remove default arrow icon */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Add custom arrow icon */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0px center;
`;

const Option = styled.option``;

const Asterik = styled.span`
  color: var(--color-purple);
  font-size: var(--font-form);
`;

const FormButton = styled.div`
  float: right;
  margin: var(--margin-small) 0 var(--margin-small) 0;
`;

const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
  padding: var(--padding-large) 0;
`;

const Img = styled.img`
  max-height: 64px;
  max-width: 64px;
  margin: 0 auto;
`;

const Delivered = styled.span`
  font-size: var(--font-xsmall);
  margin: 0 auto;
`;

const DeliveredSmall = styled.span`
  font-size: var(--font-form);
  padding: var(--padding-small);
  margin: 0 auto;
`;

const ErrorMessage = styled.div`
  padding: var(--padding-xxsmall);
  color: red;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Form() {
  // ------------------------------
  // const variables
  // ------------------------------
  // This section sets all variables needed to implement form submission
  // Create variable to keep track of form submission satus
  const [isSubmittionComplete, setSubmissionComplete] = useState(false);
  // Create variable to keep track of the loading state while submitting form
  const [isLoading, setLoading] = useState(false);

  // Variables used for error handling
  // eslint-disable-next-line
  const [fullName, setFullName] = useState('');
  // eslint-disable-next-line
  const [email, setEmail] = useState('');
  // eslint-disable-next-line
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formErrors, setFormErrors] = useState('');

  // Code logic for creating a state for our input data, an object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    howCanWeHelp: '',
    howDidYouHear: 'default',
  });

  // ------------------------------
  // Validation of the FORM
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Inside validateForm function, set the errors state correctly
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a real email';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Please provide a real phone #';
      isValid = false;
    }

    // Update the formErrors state
    setFormErrors(errors);
    return isValid;
  };

  // ------------------------------
  // Handler functions
  // ------------------------------
  // This section includes functions used to perform different tasks

  // Handle the input changes in the form
  // Inside handleInputChange function, update the state correctly
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding state variable based on the input name
    if (name === 'name') {
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhoneNumber(value);
    }
    // Update the form data object
    setFormData({ ...formData, [name]: value });
  };

  // Handle the form submittion
  // Inside handleSubmit function, update the form state properly
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (validateForm()) {
      try {
        const response = await fetch(
          'https://jesicaarreola-backend-d9d5783c3027.herokuapp.com/api/sendEmail',
          {
            method: 'POST',
            body: JSON.stringify(formData), // Use formData instead of individual variables
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          setSubmissionComplete(true);
        } else {
          console.error('Submission failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setLoading(false); // Ensure loading state is always updated
      }
    } else {
      setLoading(false); // Ensure loading state is updated when form validation fails
      console.log('Form validation failed');
    }
  };

  return (
    <>
      {isLoading ? (
        <StyledForm>
          <Spinner />
        </StyledForm>
      ) : isSubmittionComplete ? (
        <>
          <StyledForm>
            <DeliveryContainer>
              <Img src="/icons/email-sent.png"></Img>
              <Delivered>Email sent!</Delivered>
              <Delivered>I will reach out to you shortly.</Delivered>
              <DeliveredSmall>
                I look forward to create a successful partnership.
              </DeliveredSmall>
            </DeliveryContainer>
          </StyledForm>
          {/* {autoCloseModal()} */}
        </>
      ) : (
        <>
          <StyledForm
            action="https://jesicaarreola-backend-d9d5783c3027.herokuapp.com/api/sendEmail"
            method="POST"
          >
            <FormTitle>Let&rsquo;s get in touch</FormTitle>

            <FormGroup>
              <br />
              <FormSubTitle>
                just fill the form below
                <Icon src="/icons/downarrow.png"></Icon>
              </FormSubTitle>

              <hr />
              <FormRow>
                <Label htmlFor="name">
                  First and Last Name<Asterik>*</Asterik>
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormRow>
              {formErrors.name && (
                <ErrorMessage>{formErrors.name}</ErrorMessage>
              )}
            </FormGroup>
            <HorizontalGroup>
              <FormGroup>
                <FormRow>
                  <Label htmlFor="email">
                    Email Address<Asterik>*</Asterik>
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </FormRow>
                {formErrors.email && (
                  <ErrorMessage>{formErrors.email}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <FormRow>
                  <Label htmlFor="phone">
                    Phone Number<Asterik>*</Asterik>
                  </Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </FormRow>
                {formErrors.phone && (
                  <ErrorMessage>{formErrors.phone}</ErrorMessage>
                )}
              </FormGroup>
            </HorizontalGroup>

            <FormGroup>
              <FormRow>
                <Label htmlFor="howCanWeHelp">How can I help?</Label>
                <Input
                  type="text"
                  id="howCanWeHelp"
                  name="howCanWeHelp"
                  placeholder="Need a New Home?"
                  value={formData.howCanWeHelp}
                  onChange={handleInputChange}
                />
              </FormRow>
            </FormGroup>

            <FormGroup>
              <FormRow>
                <Label htmlFor="howDidYouHear">
                  How did you hear about me?
                </Label>
                <Select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                >
                  <Option value="googleSearch">Google</Option>
                  <Option value="socialMedia">Social Media</Option>
                  <Option value="friend">Friend</Option>
                  <Option value="ad">Ad</Option>
                  <Option value="other">Other</Option>
                </Select>
              </FormRow>
            </FormGroup>
            <FormButton>
              <FormRow>
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </FormRow>
            </FormButton>
          </StyledForm>
          <br />
          <hr />
        </>
      )}
    </>
  );
}

// Export reusable form component
export default Form;
