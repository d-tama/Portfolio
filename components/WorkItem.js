import { Fragment } from "react";

export default function WorkItem({ id, work }) {
  return (
    <>
      <button className="item openModal" data-modal={id}>
        <div className="item-img">
          <img src={work.thumbnail} alt="作品サムネ" />
          <span className="production-date"><span>{work.date}</span></span>
        </div>
        <span className="work-name">{work.title}</span>
      </button>
      <div id={id} className="modal">
        <div className="modal-wrapper">
          <div className="modal-content">
            {work.type === "iframe" ? (
              <iframe src={work.path} loading="lazy" />
            ) : (
              <div className="work-detail">
                <div className="work-detail-inner">
                  <h3 className="work-detail-title">{work.title}</h3>
                  <p className="work-detail-date">{work.date}</p>
                  {work.description && (
                    <p className="work-detail-description">
                      {work.description.split("\n").map((line, i) => (
                        <Fragment key={i}>
                          {line}
                          <br />
                        </Fragment>
                      ))}
                    </p>
                  )}
                  {work.images && work.images.length > 0 && (
                    <div className="work-detail-gallery">
                      {work.images.map((src, i) => (
                        <img key={src + i} src={src} alt={`${work.title} ${i + 1}`} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <span className="close">CLOSE</span>
        </div>
      </div>
    </>
  );
}
