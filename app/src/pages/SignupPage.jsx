import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authService } from '../services/api';

const highlights = [
  'Beautiful purple-white interface',
  'Team-first event planning',
  'Quick setup for campus groups',
];

export default function SignupPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      await authService.register({ username: data.username, email: data.email, password: data.password });
      navigate('/login');
    } catch (err) {
      setError('root', { message: err?.response?.data?.message || 'Network error' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f4ff] via-white to-[#efe8ff] text-on-surface">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 -right-16 h-80 w-80 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#c084fc]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16 order-2 lg:order-1">
          <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-[0_30px_80px_rgba(124,58,237,0.18)] backdrop-blur-xl sm:p-10">
            <div className="mb-8">
              <h2 className="font-headline text-3xl font-bold text-[#2e1065]">Create account</h2>
              <p className="mt-2 text-sm text-[#6b5b8c]">Start planning with a vibrant workspace in minutes.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {errors.root && (
                <div className="rounded-md bg-red-50 px-4 py-2 text-sm text-red-700">{errors.root.message}</div>
              )}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4c1d95]" htmlFor="signup-name">Name</label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Name"
                  {...register('username', { required: 'Name is required' })}
                  className={`w-full rounded-2xl border border-[#e7ddff] bg-white px-4 py-3 text-sm text-[#2e1065] outline-none transition focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/15 ${errors.username ? 'ring-1 ring-red-300' : ''}`}
                />
                <p className="mt-2 text-xs text-[#7a6795]">What should we call you on your dashboard?</p>
                {errors.username && <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4c1d95]" htmlFor="signup-email">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email', { required: 'Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email' } })}
                  className={`w-full rounded-2xl border border-[#e7ddff] bg-white px-4 py-3 text-sm text-[#2e1065] outline-none transition focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/15 ${errors.email ? 'ring-1 ring-red-300' : ''}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4c1d95]" htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  {...register('password', { required: 'Password required', minLength: { value: 6, message: 'Minimum 6 characters' } })}
                  className={`w-full rounded-2xl border border-[#e7ddff] bg-white px-4 py-3 text-sm text-[#2e1065] outline-none transition focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/15 ${errors.password ? 'ring-1 ring-red-300' : ''}`}
                />
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4c1d95]" htmlFor="signup-confirm">Confirm Password</label>
                <input
                  id="signup-confirm"
                  type="password"
                  placeholder="Repeat your password"
                  {...register('confirmPassword', { required: 'Please confirm', validate: (v) => v === watch('password') || 'Passwords do not match' })}
                  className={`w-full rounded-2xl border border-[#e7ddff] bg-white px-4 py-3 text-sm text-[#2e1065] outline-none transition focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/15 ${errors.confirmPassword ? 'ring-1 ring-red-300' : ''}`}
                />
                {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#a855f7] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#7c3aed]/25 transition hover:scale-[1.01]"
              >
                Create account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#6b5b8c]">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#7c3aed] hover:text-[#6d28d9]">
                Sign in
              </Link>
            </p>
          </div>
        </section>

        <section className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 order-1 lg:order-2">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#7c3aed] shadow-sm backdrop-blur">
            Join Event Pulse
          </div>
          <h1 className="max-w-xl font-headline text-5xl font-black tracking-tight text-[#2e1065] sm:text-6xl">
            Build faster with a clean purple-and-white flow.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#5b4b7a]">
            Register once and unlock the dashboard for campaigns, content, and team coordination.
          </p>

          <div className="mt-10 grid gap-4 max-w-md">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                <span className="material-symbols-outlined text-[#7c3aed]">star</span>
                <span className="text-sm font-medium text-[#41286c]">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
