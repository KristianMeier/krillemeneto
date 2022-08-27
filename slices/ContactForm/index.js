import { Bounded } from '../../components/Bounded'

const Field = ({ label, children }) => {
  return (
    <label>
      <span className='field'>{label}</span>
      {children}
    </label>
  )
}

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className='inputfield'
      />
    </Field>
  )
}

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className='textareafield'
      />
    </Field>
  )
}

const ContactForm = () => {
  return (
    <Bounded as='section' size='small'>
      <form action='/api/contact' method='post' className='contactform-grid'>
        <InputField label='Name' name='name' placeholder='Jane Doe' />
        <InputField
          label='Email Address'
          name='email'
          type='email'
          placeholder='jane.doe@example.com'
        />
        <TextareaField
          label='Message'
          name='message'
          placeholder='Write your message here…'
        />
        <button type='submit' className='contactform-button'>
          Send message{' '}
          <span aria-hidden={true} className='contactform-arrow'>
            &rarr;
          </span>
        </button>
      </form>
    </Bounded>
  )
}

export default ContactForm
