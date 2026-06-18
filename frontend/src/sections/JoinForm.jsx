import React, { useState } from 'react';

const roles = [
  {
    key: 'judge',
    title: 'Become In Judge',
    role: 'Judge'
  },
  {
    key: 'volunteer',
    title: 'Volunteer',
    role: 'Volunteer'
  },
  {
    key: 'community-member',
    title: 'Community Member',
    role: 'Community Member'
  }
];

const emptyForm = {
  name: '',
  location: '',
  enroll: ''
};

export default function JoinForm() {
  const [forms, setForms] = useState(() =>
    roles.reduce((acc, role) => ({ ...acc, [role.key]: emptyForm }), {})
  );
  const [status, setStatus] = useState({ loading: '', success: '', error: '' });

  const handleChange = (roleKey, field, value) => {
    setForms((current) => ({
      ...current,
      [roleKey]: {
        ...current[roleKey],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (event, role) => {
    event.preventDefault();

    const data = forms[role.key];
    if (!data.name || !data.location || !data.enroll) {
      setStatus({ loading: '', success: '', error: role.key });
      return;
    }

    setStatus({ loading: role.key, success: '', error: '' });

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          role: role.role,
          ...data
        })
      });
    } catch (error) {
      console.error('Join form submit error:', error);
    }

    setForms((current) => ({
      ...current,
      [role.key]: emptyForm
    }));
    setStatus({ loading: '', success: role.key, error: '' });
  };

  return (
    <section id="join-form" className="join-ecosystem-section">
      <div className="join-ecosystem-container">
        <h2 className="join-ecosystem-title">Join The Ecosystem</h2>

        <div className="join-role-grid" aria-label="Join the ecosystem options">
          {roles.map((role) => {
            const form = forms[role.key];
            const isLoading = status.loading === role.key;

            return (
              <form
                key={role.key}
                className="join-role-card"
                onSubmit={(event) => handleSubmit(event, role)}
              >
                <h3>{role.title}</h3>

                <div className="join-input-stack">
                  <input
                    type="text"
                    aria-label={`${role.role} name`}
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) => handleChange(role.key, 'name', event.target.value)}
                  />
                  <input
                    type="text"
                    aria-label={`${role.role} location`}
                    placeholder="Location"
                    value={form.location}
                    onChange={(event) => handleChange(role.key, 'location', event.target.value)}
                  />
                  <input
                    type="text"
                    aria-label={`${role.role} enroll`}
                    placeholder="Enroll"
                    value={form.enroll}
                    onChange={(event) => handleChange(role.key, 'enroll', event.target.value)}
                  />
                </div>

                <button className="join-signup-button" type="submit" disabled={isLoading}>
                  {isLoading ? 'Signing Up' : 'Sign Up'}
                </button>

                {status.error === role.key && (
                  <p className="join-card-message error">Fill all fields</p>
                )}
                {status.success === role.key && (
                  <p className="join-card-message">Request received</p>
                )}
              </form>
            );
          })}
        </div>
      </div>
    </section>
  );
}
