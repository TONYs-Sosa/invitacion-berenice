"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Beer, Calendar, MessageCircle, Star } from 'lucide-react';

interface TimeLeft {
  dias: number;
  horas: number;
  min: number;
  seg: number;
}

export default function InvitacionCumple() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    // FECHA: 07 de Marzo de 2026 a las 18:00
    const targetDate = new Date("2026-03-07T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seg: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white font-sans selection:bg-yellow-500/30">
      
      {/* --- HERO: INTRO FIESTA 40 AÑOS --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative text-center px-4">
          <div className="flex justify-center mb-4">
            <Star className="text-yellow-500 fill-yellow-500 w-8 h-8 animate-spin-slow" />
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600">
            BERENICE
          </h1>
          <p className="text-2xl md:text-4xl font-light tracking-[0.3em] uppercase mb-8">
            Mis 40 Años
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-8 py-4 rounded-full">
            <p className="text-lg font-bold tracking-widest">07 . MARZO . 2026</p>
          </div>
        </div>
      </section>

      {/* --- COUNTDOWN --- */}
      <section className="bg-yellow-600 py-10">
        <div className="flex justify-center gap-8 md:gap-16 text-center">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label}>
              <div className="text-4xl md:text-6xl font-black">{value}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- DETALLES --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* CUÁNDO Y DÓNDE */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
            <Calendar className="w-10 h-10 text-yellow-500 mb-6" />
            <h2 className="text-3xl font-bold mb-6 italic">¿Dónde & Cuándo?</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center gap-4">
                <Clock className="text-yellow-500" />
                <span>6:00 PM - ¡Hasta que el cuerpo aguante!</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-500 mt-1" />
                <p>Río Grande 20, Francisco Villa,<br />Azcapotzalco, CDMX</p>
              </div>
            </div>
            {/* LINK DE GOOGLE MAPS */}
            <a 
              href="https://maps.app.goo.gl/FVuvedyiZYeHnPUy5"
              target="_blank"
              className="mt-8 block text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors"
            >
              VER UBICACIÓN
            </a>
          </div>

          {/* REGLA DE ORO (ALCOHOL) */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 flex flex-col justify-center text-center italic">
            <Beer className="w-16 h-16 text-yellow-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold mb-4 uppercase">¡Importante!</h2>
            <p className="text-xl text-gray-300">
              "La casa pone el lugar y la música, pero tú pones el ambiente... ¡y tu alcohol!"
            </p>
            <p className="mt-4 text-yellow-500 font-bold tracking-widest uppercase text-sm">
              BYOB - Trae tu propia bebida
            </p>
          </div>

        </div>
      </section>

      {/* --- RSVP --- */}
      <section className="py-24 text-center bg-gradient-to-t from-black to-transparent">
        <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">¿Cuento contigo?</h2>
        <a 
          href="https://wa.me/5511185743?text=¡Hola Berenice! Confirmo mi asistencia a tu cumple." 
          target="_blank"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-6 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all"
        >
          <MessageCircle />
          CONFIRMAR ASISTENCIA
        </a>
        <p className="mt-20 text-gray-600 tracking-[0.5em] uppercase text-[10px]">Berenice's 40th Bash</p>
      </section>

    </div>
  );
}