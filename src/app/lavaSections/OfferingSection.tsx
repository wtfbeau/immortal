// components/OfferingCard.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface OfferingFeature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface OfferingCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  features: OfferingFeature[];
  ctaText: string;
  ctaHref: string;
  ctaStyle: 'primary' | 'secondary';
  imagePath: string;
  reversed?: boolean;
  mostPopular?: boolean;
}

export default function OfferingCard({
  id,
  title,
  price,
  description,
  features,
  ctaText,
  ctaHref = '#contact', // Default value to prevent undefined
  ctaStyle,
  imagePath,
  reversed = false,
  mostPopular = false,
}: OfferingCardProps) {
  const imageComponent = (
    <div className="lg:w-2/5 mb-10 lg:mb-0 lg:px-6 flex justify-center">
      <div className="relative">
        <div className="book-shine sacred-glow rounded-sm overflow-hidden border border-gold/30">
          <div className="w-full max-w-xs aspect-[9/16] relative">
            {mostPopular && (
              <div className="absolute top-0 right-0 bg-crimson text-ivory font-cinzel py-2 px-4 z-20 shadow-lg">
                Most Popular
              </div>
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${
                ctaStyle === 'primary'
                  ? 'from-transparent to-crimson/40'
                  : 'from-transparent to-gold/40'
              } z-10`}
            ></div>
            <div className="relative w-full h-full">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const contentComponent = (
    <div className="lg:w-3/5 lg:px-6">
      <div
        className={`sacred-glow p-8 ${
          mostPopular ? 'border-2 border-gold' : 'border border-gold/30'
        } bg-charcoal/80 backdrop-blur-sm rounded-sm relative overflow-hidden`}
      >
        {mostPopular && (
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute transform rotate-45 bg-crimson text-center text-ivory font-cinzel py-1 px-8 right-[-35px] top-[18px] text-sm">
              Best Value
            </div>
          </div>
        )}

        <h3 className="font-cinzel text-3xl mb-2 text-gold">{title}</h3>
        <p className="font-cinzel text-2xl mb-6 text-crimson">{price}</p>
        <p className="font-inter text-base mb-8 text-ivory/90">{description}</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 text-crimson flex-shrink-0 mt-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-ivory text-sm">
                  <span className="font-cinzel text-gold">{feature.title}</span>{' '}
                  <span className="text-ivory/80">{feature.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={ctaHref || '#contact'}
          className={`flame-button block text-center w-full sacred-glow ${
            ctaStyle === 'primary'
              ? 'bg-crimson text-ivory hover:bg-crimson/90 shadow-lg shadow-crimson/30'
              : 'bg-gold/10 border-2 border-gold text-gold hover:bg-gold/20'
          } font-cinzel text-lg py-4 rounded-sm transition-all duration-300 transform hover:scale-105`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );

  return (
    <div
      id={id}
      className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center py-12"
    >
      {reversed ? (
        <>
          {contentComponent}
          {imageComponent}
        </>
      ) : (
        <>
          {imageComponent}
          {contentComponent}
        </>
      )}
    </div>
  );
}
