
import React, { useState } from 'react';
import { Terminal, Send, X, ShieldAlert, Cpu } from 'lucide-react';
import { TRACKS } from '../constants';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (name: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  type = "text", 
  placeholder = "", 
  required = true,
  value,
  onChange
}) => (
  <div className="group space-y-2">
    <label className="flex items-center gap-2 font-mono text-[11px] font-bold text-ide-muted uppercase tracking-widest">
      <span className="text-ide-keyword">{'>'}</span> {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="w-full bg-ide-active/50 border border-ide-border focus:border-ide-function p-4 font-mono text-ide-text rounded-lg outline-none transition-all placeholder:opacity-20 backdrop-blur-sm"
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  </div>
);

interface RegistrationFormProps {
  onCancel: () => void;
  onSuccess: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    college: '',
    track: 'ai',
    github: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="bg-ide-header/60 border border-ide-border rounded-2xl shadow-2xl overflow-hidden animate-slide-up backdrop-blur-xl">
      <div className="bg-ide-sidebar p-4 border-b border-ide-border flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Terminal size={18} className="text-ide-function" />
          <h2 className="font-mono text-sm font-bold tracking-tight">src/forms/Registration.tsx</h2>
        </div>
        <button onClick={onCancel} className="text-ide-muted hover:text-white transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="p-8 md:p-12">
        <div className="mb-10 flex items-start gap-4 p-4 bg-ide-function/5 border border-ide-function/20 rounded-xl">
          <Cpu className="text-ide-function mt-1 shrink-0" size={24} />
          <div>
            <h3 className="text-ide-text font-bold mb-1">New Deployment Protocol</h3>
            <p className="text-ide-muted text-xs font-mono leading-relaxed">
              Initiating secure entry for Kode Kurrent '26. Please provide the required metadata to provision your team instance.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField 
              label="Team Identifier" 
              name="teamName" 
              placeholder="e.g. bits_pirates" 
              value={formData.teamName}
              onChange={handleInputChange}
            />
            <InputField 
              label="Lead Architect Name" 
              name="leaderName" 
              placeholder="Full name of team leader" 
              value={formData.leaderName}
              onChange={handleInputChange}
            />
            <InputField 
              label="Contact Uplink (Email)" 
              name="email" 
              type="email" 
              placeholder="dev@example.com" 
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputField 
              label="Signal Frequency (Phone)" 
              name="phone" 
              type="tel" 
              placeholder="+91 XXXXX XXXXX" 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <InputField 
            label="Origin (College/Org)" 
            name="college" 
            placeholder="Institute name" 
            value={formData.college}
            onChange={handleInputChange}
          />

          <div className="group space-y-2">
            <label className="flex items-center gap-2 font-mono text-[11px] font-bold text-ide-muted uppercase tracking-widest">
              <span className="text-ide-keyword">{'>'}</span> Project Module (Track)
            </label>
            <select
              className="w-full bg-ide-active/50 border border-ide-border focus:border-ide-function p-4 font-mono text-ide-text rounded-lg outline-none transition-all appearance-none cursor-pointer backdrop-blur-sm"
              value={formData.track}
              onChange={(e) => handleInputChange('track', e.target.value)}
            >
              {TRACKS.map(track => (
                <option key={track.id} value={track.id} className="bg-ide-bg text-ide-text">
                  {track.icon} {track.title}
                </option>
              ))}
            </select>
          </div>

          <InputField 
            label="Legacy Link (GitHub)" 
            name="github" 
            required={false} 
            placeholder="https://github.com/yourprofile" 
            value={formData.github}
            onChange={handleInputChange}
          />

          <div className="pt-6 flex flex-col md:flex-row gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-ide-accent hover:bg-green-600 disabled:bg-ide-muted/50 disabled:cursor-not-allowed text-white py-5 rounded-xl font-mono font-bold transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(63,185,80,0.2)]"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>PROVISIONING...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>SUBMIT_REGISTRATION</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-10 py-5 bg-ide-sidebar border border-ide-border text-ide-text rounded-xl font-mono font-bold hover:bg-ide-active transition-all"
            >
              ABORT_PROCESS
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-ide-border/50 flex items-center gap-4 text-ide-muted">
           <ShieldAlert size={16} className="text-ide-variable" />
           <p className="text-[10px] font-mono uppercase tracking-tighter">
             By submitting, you agree to the Hackathon Code of Conduct and local laws of physics.
           </p>
        </div>
      </div>
    </div>
  );
};
