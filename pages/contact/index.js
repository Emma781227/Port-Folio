import React, {useRef, useState} from 'react';
import Layout from '/components/Layout';
import Circles from '/components/Circles';
import {BsArrowRight, BsEnvelope, BsTelephone} from 'react-icons/bs';

export function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({type: '', message: ''});

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    // demo
    setStatus({type: 'success', message: "Message envoyé (démo)."});
    form.reset();
  };

  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center bg-primary/30 py-16">
      <Circles />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/5">
          <div className="md:flex">
            <div className="md:w-1/2 p-10 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600">
              <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
              <p className="text-white/90 mb-6">Envoyez un message — je réponds rapidement.</p>

              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <BsEnvelope className="text-2xl" />
                  <div> 
                    <div className="text-sm opacity-80">Email</div>
                    <div className="font-medium">
                      <a href="mailto:emmaengongomo5@gmail.com?subject=Contact%20depuis%20le%20site" className="underline">emmaengongomo5@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BsTelephone className="text-2xl" />
                  <div>
                    <div className="text-sm opacity-80">Phone</div>
                    <div className="font-medium">+33 7 60 27 17 35</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-10">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" placeholder="Votre nom" required className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 placeholder-white/60" />
                  <input name="email" type="email" placeholder="Votre email" required className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 placeholder-white/60" />
                </div>
                <input name="subject" placeholder="Sujet" className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 placeholder-white/60" />
                <textarea name="message" rows="5" placeholder="Votre message" required className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 placeholder-white/60"></textarea>

                <div className="flex items-center justify-between">
                  <div>{status.message && <span className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}>{status.message}</span>}</div>
                  <button type="submit" className="inline-flex items-center gap-3 bg-accent hover:opacity-90 text-black font-semibold px-5 py-3 rounded">
                    <span>Envoyer</span>
                    <BsArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Contact = () => {
  return (
    <Layout>
      <ContactSection />
    </Layout>
  );
};

export default Contact;
