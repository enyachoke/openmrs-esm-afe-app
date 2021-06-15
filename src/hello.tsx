/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from 'react';
import { ExtensionSlot, Extension } from '@openmrs/esm-framework';
import styles from './hello.css';
import { PatientGetter } from './patient-getter/patient-getter';
import { AfeWidget } from './afe-widget/afe-widget'

const Hello: React.FC = () => {
  return (
    <div className={`omrs-main-content ${styles.container}`}>
      <ExtensionSlot extensionSlotName="patient-afe-hello">
        <Extension />
      </ExtensionSlot>
      <AfeWidget/>
    </div>
  );
};

export default Hello;
