import { Mail, MapPin } from 'lucide-react'

const columns = [
  { title: 'Support', links: ['FAQ', 'Contact Us', 'Chat'] },
  { title: 'Services', links: ['Order tracking', 'Smart List', 'Sign - up'] },
  { title: 'Terms and Policies', links: ['About Us', 'Terms Of Use', 'Privacy Policy', 'Return Policy', 'Cookies Policy'] },
]

export function Footer() {
  return (
    <footer className="bg-[#f5fbfe] text-slate-700">
      <div className="box-container grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:py-12">
        <div>
          <div className="text-xl font-extrabold tracking-tight text-app-main">Gr<span className="text-app-light-blue">o</span>cery <span className="text-app-gold">+</span></div>
          <div className="mt-4 flex items-center gap-3">
            {/* <a href="#instagram" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#facebook" aria-label="Facebook"><Facebook size={16} /></a> */}
          </div>
          <p className="mt-5 max-w-sm text-[10px] leading-5 text-slate-700">
            Grocery platform offering fresh produce, daily essentials, personalized recommendations, and seamless ordering with secure payments and real-time tracking.
          </p>
          <div className="mt-5 space-y-3 text-[11px]">
            <div className="flex items-center gap-2"><MapPin size={14} /> 5th Settlement,New Cairo, Cairo, Egypt</div>
            <div className="flex items-center gap-2"><Mail size={14} /> help@groceryplus.com</div>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-semibold text-slate-800">{column.title}</h3>
            <ul className="mt-5 space-y-4">
              {column.links.map((link) => <li key={link}><a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="text-[10px] hover:text-app-main">{link}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-app-main py-1.5 text-center text-[10px] text-white">© 2025 GroceryPlus - Smart Grocery, Delivered Fast. All Rights Reserved.</div>
    </footer>
  )
}
