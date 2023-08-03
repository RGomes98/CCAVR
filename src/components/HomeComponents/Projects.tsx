import { projectDescription } from '../../data/projectDescription';
import { Project } from '../ProjectModal/Project';

import styles from '../../stylesheets/components/HomeComponentsStyles/Projects.module.scss';

export const Projects: React.FC = () => {
  return (
    <div id='project' className={styles.container}>
      <div className={styles.textWrapper}>
        <h2 className={styles.heading}>Projetos que Transformam Vidas</h2>
        <p className={styles.text}>
          A Casa da Criança e do Adolescente mantém diversos projetos que se complementam e
          asseguram tratamento adequado às crianças e aos adolescentes.
        </p>
      </div>
      <div className={styles.projectWrapper}>
        {projectDescription.map(({ name, description }, idx) => {
          return (
            <Project
              key={idx}
              name={name}
              description={description}
              projectStyle={styles.project}
            />
          );
        })}
      </div>
    </div>
  );
};
