import React from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";
import { useUserForm } from "../../utils/hooks";

const UserForm = () => {
  const { getUserForm, handleUserForm } = useUserForm();

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {getUserForm.avatar ? (
                  <img src={getUserForm.avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>

              {getUserForm.name && (
                <p className="user__name">
                  {getUserForm.name}
                  <span>@{getUserForm.username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={getUserForm.name}
              placeholder="Ex: Fulano da Silva"
              onChange={(event) => handleUserForm.name(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={getUserForm.username}
              placeholder="Ex: fulano_da_silva"
              onChange={(event) => handleUserForm.userName(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={getUserForm.email}
              placeholder="Ex: fulano@provedor.com"
              onChange={(event) => handleUserForm.email(event)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              onChange={(event) => handleUserForm.avatar(event)}
            />

            <button
              type="button"
              onClick={(event) => handleUserForm.addUser(event)}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {getUserForm.submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
