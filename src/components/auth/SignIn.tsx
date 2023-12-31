import { closeModal, useAppDispatch } from "../../store";

export const SignIn = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white p-20 relative">
      <button
        className="absolute top-10 right-10"
        onClick={() => dispatch(closeModal())}
      >
        Close
      </button>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="email" name="password" />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};
