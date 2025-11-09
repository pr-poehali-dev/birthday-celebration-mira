import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  const handleCakeClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-red-50 to-yellow-100">
      {showConfetti && (
        <>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                background: ['#FF0000', '#000000', '#FF69B4', '#FFD700'][Math.floor(Math.random() * 4)],
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </>
      )}

      {[...Array(15)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-2xl animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-bounce-in">
            <h1 className="text-6xl md:text-8xl font-bold text-red-600 mb-4 drop-shadow-lg">
              С Днём Рождения!
            </h1>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-black rounded"></div>
              <span className="text-4xl">🐞</span>
              <div className="w-16 h-1 bg-black rounded"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-pink-500 mb-6 animate-pulse-grow">
              Мира!
            </h2>
            <div className="inline-flex items-center gap-3 bg-yellow-400 px-8 py-4 rounded-full shadow-2xl animate-float">
              <span className="text-6xl">🎂</span>
              <span className="text-5xl font-bold text-red-600">5</span>
              <span className="text-6xl">🎉</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="overflow-hidden animate-bounce-in shadow-2xl border-4 border-red-500" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/75ed66ae-9dd7-41c7-8650-1c330207293d/files/50e2331e-1fc5-4aa9-b298-e553d31af9db.jpg"
                alt="Леди Баг"
                className="w-full h-64 object-cover"
              />
            </Card>

            <Card className="overflow-hidden animate-bounce-in shadow-2xl border-4 border-pink-400" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/75ed66ae-9dd7-41c7-8650-1c330207293d/files/05a11146-a414-4562-a40f-28fde980279d.jpg"
                alt="Праздник"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm p-8 shadow-2xl animate-bounce-in border-4 border-yellow-400" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-6">
              <div className="flex justify-center gap-3 text-4xl mb-4">
                <span className="animate-float" style={{ animationDelay: '0s' }}>🎈</span>
                <span className="animate-float" style={{ animationDelay: '0.2s' }}>🎀</span>
                <span className="animate-float" style={{ animationDelay: '0.4s' }}>🦋</span>
                <span className="animate-float" style={{ animationDelay: '0.6s' }}>⭐</span>
              </div>

              <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
                Милая Мира! 🌸
              </p>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Поздравляем тебя с твоим волшебным днём рождения! 
                Пусть твоя жизнь будет такой же яркой и весёлой, 
                как приключения Леди Баг! ✨
              </p>

              <div className="bg-gradient-to-r from-red-100 via-pink-100 to-yellow-100 p-6 rounded-2xl border-2 border-red-300">
                <p className="text-xl md:text-2xl font-semibold text-red-600 mb-3">
                  Желаем тебе:
                </p>
                <ul className="text-lg md:text-xl text-gray-700 space-y-3">
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-2xl">💝</span>
                    <span>Много радости и смеха</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🎁</span>
                    <span>Исполнения всех желаний</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🌈</span>
                    <span>Ярких приключений</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🎪</span>
                    <span>Весёлых праздников</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-2xl">💖</span>
                    <span>Любви и счастья</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center gap-4 pt-6">
                <Button 
                  size="lg"
                  onClick={handleCakeClick}
                  className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 rounded-full shadow-xl transform transition hover:scale-110"
                >
                  <span className="mr-2">🎂</span>
                  Зажечь свечи!
                  <span className="ml-2">🎂</span>
                </Button>
              </div>

              {clickCount > 0 && (
                <div className="animate-bounce-in">
                  <p className="text-3xl font-bold text-pink-600 mt-4">
                    {'🎉'.repeat(Math.min(clickCount, 5))}
                  </p>
                  {clickCount >= 5 && (
                    <p className="text-2xl font-semibold text-red-600 mt-2">
                      Загадывай желание! 🌟✨
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-center gap-3 text-5xl mt-8">
                <span className="animate-pulse-grow" style={{ animationDelay: '0s' }}>🐞</span>
                <span className="animate-pulse-grow" style={{ animationDelay: '0.3s' }}>🖤</span>
                <span className="animate-pulse-grow" style={{ animationDelay: '0.6s' }}>🐾</span>
              </div>

              <p className="text-3xl font-bold text-red-600 mt-6">
                С любовью! 💕
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
