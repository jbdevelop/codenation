import React from "react"

class Contact extends React.Component {
  render() {
    const contact = this.props.data
    const admissionDate = contact.admissionDate

    const formatDate = new Intl.DateTimeFormat('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const [{ value: dd },,{ value: mm },,{ value: yyyy }] = formatDate.formatToParts(new Date(admissionDate));

    return (
      <article data-testid="contact" className="contact">
        <img
          className="contact__avatar"
          src={contact.avatar}
          alt={contact.name}
        />
        <span className="contact__data" data-testid='contact-name'>{contact.name}</span>
        <span className="contact__data" data-testid='contact-phone'>{contact.phone}</span>
        <span className="contact__data" data-testid='contact-country'>{contact.country}</span>
        <span className="contact__data" data-testid='contact-date'>{`${mm}/${dd}/${yyyy}`}</span>
        <span className="contact__data" data-testid='contact-company'>{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </article>
    )
  }
}

export default Contact