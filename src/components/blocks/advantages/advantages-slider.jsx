import React from "react";
import { slides } from "../../../mocks/slides";

function AdvantageCard({ item, className = "" }) {
  if (item.kind === "mascot") {
    return (
      <article className={`adv-card adv-mascot ${className}`}>
        <div className="adv-mascot-stage">
          <div className="mascot-beam" aria-hidden="true" />

          <div className="adv-card-head">
            <span className="adv-tag">{item.tag}</span>
          </div>

          <div className="adv-mascot-visual">
            {item.speech && (
              <div className="speech-bubble">
                <span>{item.speech}</span>
              </div>
            )}
            <img
              className="mascot-img"
              src={item.image}
              alt={item.imageAlt}
              width={item.width}
              height={item.height}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>

        <div className="adv-mascot-footer">
          <div className="adv-text-col adv-text-col--light">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          <div className="mascot-checks">
            <span>Всё включим вместе</span>
            <span>Объясним на пальцах</span>
          </div>
        </div>
      </article>
    );
  }

  if (item.kind === "chemistry") {
    return (
      <article className={`adv-card adv-chemistry ${className}`}>
        <div className="adv-chem-grid">
          <div className="adv-chem-copy">
            <div className="adv-card-head">
              <span className="adv-tag">{item.tag}</span>
            </div>

            <div className="adv-text-col">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="chem-fit-row" aria-label="Для каких поверхностей">
              <span>Мебель</span>
              <span>Ковры</span>
              <span>Салон авто</span>
            </div>
          </div>

          <div className="adv-chem-stage">
            <div className="chem-stage-stripe" aria-hidden="true" />
            <img
              src={item.image}
              alt={item.imageAlt}
              width={item.width}
              height={item.height}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`adv-card adv-coupon ${className}`}>
      <span className="coupon-notch coupon-notch--left" aria-hidden="true" />
      <span className="coupon-notch coupon-notch--right" aria-hidden="true" />

      <div className="adv-card-head">
        <span className="adv-tag adv-tag--coupon">{item.tag}</span>
        <span className="coupon-discount">{item.discount}</span>
      </div>

      <div className="adv-coupon-body">
        <div className="coupon-badge-wrap">
          <img
            src={item.image}
            alt={item.imageAlt}
            width={item.width}
            height={item.height}
            loading="lazy"
            draggable={false}
          />
        </div>

        <div className="adv-text-col adv-text-col--coupon">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.bonusLine && (
            <div className="coupon-bonus-strip">{item.bonusLine}</div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AdvantagesSlider() {
  return (
    <div className="advantages-bento">
      {slides.map((item) => (
        <AdvantageCard key={item.id} item={item} />
      ))}
    </div>
  );
}
