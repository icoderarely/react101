const Something = () => {
  return (
    <>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
          name="priority"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          // onChange={(e) => setPriority(e.target.value)}
          onChange={handleChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
          name="title" // this will allow us to use e.target.name/value
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
          name="description"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          // onChange={(e) => setDescription(e.target.value)}
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
};
