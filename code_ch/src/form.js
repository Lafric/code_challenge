import React, { useState } from 'react';

function MyForm( { onSubmit } ) {
  const [formData, setFormData] = useState({
    id: 0,
    effort: '',
    name: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
          id: 0,
          effort: '',
          name: '',
          description: ''
        });
      };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <br />
      <label>
        Effort:
        <input type="text" name="effort" value={formData.effort} onChange={handleChange} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default MyForm;