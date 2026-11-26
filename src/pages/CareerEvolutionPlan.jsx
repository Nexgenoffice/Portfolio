import PageHero from '../components/PageHero';
import Card from '../components/Card';
import './CareerEvolutionPlan.css';

const CareerEvolutionPlan = () => {
  return (
    <div className="page">
      <PageHero
        title="Career & Evolution Plan"
        subtitle="Career vision · 2026–2031"
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
      />

      <div className="container">
        <Card>
          <div className="cep-presentation-heading">
            <div>
              <h2>My career evolution plan</h2>
              <p>
                My professional goals, development plan and possible career paths,
                presented in my Career Evolution Plan.
              </p>
            </div>
            <a
              className="btn btn-primary"
              href="/Adrien_Darriet_Career_Evolution_Plan.pptx"
              download
            >
              Download full presentation
            </a>
          </div>

          <figure className="cep-slide">
            <img
              src="/CEP-slide-4.png"
              alt="Slide 4: Career Evolution Plan, with my 2026–2031 career roadmap and goals"
            />
            <figcaption>
              Slide 4 · Career Evolution Plan 2026–2031
            </figcaption>
          </figure>
        </Card>
      </div>
    </div>
  );
};

export default CareerEvolutionPlan;
