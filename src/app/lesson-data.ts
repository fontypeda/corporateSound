// lesson-data.ts

// Importieren der Slide-Komponenten
import { OverviewComponent } from './slides/overview/overview.component';
import { Module1IntroComponent } from './slides/module1-intro/module1-intro.component';
import { Module1BedeutungComponent } from './slides/module1-bedeutung/module1-bedeutung.component';
import { Module1PsychologieComponent } from './slides/module1-psychologie/module1-psychologie.component';
import { Module1ZusammenfassungComponent } from './slides/module1-zusammenfassung/module1-zusammenfassung.component';

import { Module2WasComponent } from './slides/module2-was/module2-was.component';
import { Module2ElementeComponent } from './slides/module2-elemente/module2-elemente.component';
import { Module2UnterschiedComponent } from './slides/module2-unterschied/module2-unterschied.component';
import { Module2ZusammenfassungComponent } from './slides/module2-zusammenfassung/module2-zusammenfassung.component';

import { Module3TouchpointsComponent } from './slides/module3-touchpoints/module3-touchpoints.component';
import { Module3KriterienComponent } from './slides/module3-kriterien/module3-kriterien.component';
import { Module3CaseStudiesComponent } from './slides/module3-case-studies/module3-case-studies.component';
import { Module3ZusammenfassungComponent } from './slides/module3-zusammenfassung/module3-zusammenfassung.component';

import { Module4ProzessComponent } from './slides/module4-prozess/module4-prozess.component';
import { Module4BranchenueberblickComponent } from './slides/module4-branchenueberblick/module4-branchenueberblick.component';
import { Module4AnwendungsbeispieleComponent } from './slides/module4-anwendungsbeispiele/module4-anwendungsbeispiele.component';
import { Module4RechteComponent } from './slides/module4-rechte/module4-rechte.component';

import { ZusaetzlicheThemenComponent } from './slides/zusaetzliche-themen/zusaetzliche-themen.component';
import { BestPracticesComponent } from './slides/best-practices/best-practices.component';
import { AbschlussComponent } from './slides/abschluss/abschluss.component';

export interface Comment {
  type: 'question' | 'note' | 'important' | 'discussion' | 'übergang';
  script?: string;
  note?: string;
  slide: number;
}

export interface Activity {
  script?: string;
  note?: string;
}

export interface LessonModule {
  id: number;
  title: string;
  duration: string;
  color: string; // Farbeigenschaft
  sections: ModuleSection[];
  comments: Comment[];
}

export interface ModuleSection {
  id: number;
  title: string;
  subtitle?: string;
  color?: string; // Farbeigenschaft
  description?: string;
  duration: string;
  activities: Activity[];
  component: any; // Referenz auf die Slide-Komponente
}

export const LESSON_MODULES: LessonModule[] = [
  {
    id: 0,
    title: 'Übersicht',
    duration: '15 Minuten',
    color: '#FFC107',
    sections: [
      {
        id: 0,
        title: 'Einführung in Corporate Sound',
        subtitle: 'Einführung',
        description:
          'Eine Einführung in die wichtigsten Konzepte des Corporate Sounds und des auditiven Designs.',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Corporate Sound ist die akustische Identität einer Marke. Wir werden heute herausfinden, was das bedeutet und wie es eingesetzt wird.',
            note: 'Definition von Corporate Sound als akustische Identität einer Marke erläutern.',
          },
          {
            script:
              'Ziel dieses Moduls ist es, Ihnen eine Einführung in das Thema zu geben und einen Überblick über die folgenden Module zu verschaffen.',
            note: 'Den Studierenden den Ablauf und die Ziele der Präsentation erklären.',
          },
        ],
        component: OverviewComponent,
      },
    ],
    comments: [],
  },
  {
    id: 1,
    title: 'Einführung in Corporate Sound',
    duration: '1,5 Stunden',
    color: '#FF5722',
    sections: [
      {
        id: 1,
        title: 'Begrüßung und persönliche Vorstellung',
        subtitle: '1.1 Begrüßung und persönliche Vorstellung',
        description:
          'Vorstellung des Dozenten, Einführung in das Thema und Diskussion über die Auswirkungen von Sound auf Entscheidungen, Denken und Handeln.',
        duration: '20 Minuten',
        activities: [
          {
            script:
              'Guten Tag, mein Name ist Peter Albertz, und ich bin Komponist und Sound Designer. Ich habe das Studio Fonty-Music gegründet, das Sie unter www.fontymusic.com finden können.',
            note: 'Persönliche Vorstellung und Hintergrund erläutern.',
          },
          {
            script:
              'Ich möchte mit einem kleinen Audio-Quiz beginnen. Ich spiele Ihnen einige bekannte Soundlogos vor, und Sie raten, welche Marke dahintersteckt.',
            note: 'Audio-Quiz mit Marken wie McDonald’s, Intel und Telekom durchführen.',
          },
          {
            script:
              'Unser Ziel ist es, zu verstehen, welche Bedeutung Sound in unserem täglichen Leben hat und wie er unsere Wahrnehmung von Marken beeinflusst.',
            note: 'Den Zweck des Quiz und die Relevanz von Corporate Sound betonen.',
          },
        ],
        component: Module1IntroComponent,
      },
      {
        id: 2,
        title: 'Die Bedeutung des Klangs in der menschlichen Kommunikation',
        subtitle: '1.2 Die Bedeutung des Klangs',
        description:
          'Untersuchung der Rolle des Klangs in der Kommunikation der Menschen und historischen Beispielen von Sound Branding.',
        duration: '30 Minuten',
        activities: [
          {
            script:
              'Wussten Sie, dass eines der ältesten Soundlogos die Kirchenglocke ist? Sie erzeugt sofort Assoziationen mit Religion und Gemeinschaft.',
            note: 'Beispiel der Kirchenglocke als frühestes Soundlogo erläutern.',
          },
          {
            script:
              'Klänge haben eine starke emotionale Wirkung und sind oft mit Erinnerungen verbunden. Deshalb reagieren wir so intensiv auf akustische Signale.',
            note: 'Die emotionale Bindung der Menschen an Klänge erklären.',
          },
          {
            script:
              'Vom historischen Sound Branding, wie der Kirchenglocke, können wir eine Brücke zum modernen Marketing schlagen, in dem Sound eine wichtige Rolle spielt.',
            note: 'Übergang vom historischen zum modernen Einsatz von Corporate Sound.',
          },
        ],
        component: Module1BedeutungComponent,
      },
      {
        id: 3,
        title: 'Psychologie der Kaufentscheidung und auditive Einflüsse',
        subtitle: '1.3 Psychologie der Kaufentscheidung',
        description:
          'Untersuchung, wie Corporate Sound das Kaufverhalten beeinflusst und warum Sound im Handel wichtig ist.',
        duration: '45 Minuten',
        activities: [
          {
            script:
              'Musik hat eine unmittelbare Wirkung und beeinflusst emotionale Prozesse. Sie besitzt die Kraft der Verführung und kann unser Kaufverhalten steuern.',
            note: 'Die Fähigkeit von Musik, Emotionen zu beeinflussen, hervorheben.',
          },
          {
            script:
              'Beispielsweise führt klassische Musik im Supermarkt dazu, dass Kunden teurere Produkte kaufen. Französische Musik erhöht den Verkauf von französischem Wein.',
            note: 'Studien über den Einfluss von Hintergrundmusik auf Kaufentscheidungen erwähnen.',
          },
          {
            script:
              'Obwohl die Konsumenten die Musik oft nicht bewusst wahrnehmen, beeinflusst sie dennoch stark ihr Verhalten.',
            note: 'Die unbewusste Beeinflussung durch Musik betonen.',
          },
          {
            script:
              'Es gibt ca. 60.000 Markenanmeldungen mit einem visuellen Logo. Dagegen stehen nur ca. 200 akustische Anmeldungen. Das Marktpotenzial ist also riesig.',
            note: 'Die Zahlen verdeutlichen das Potenzial von Corporate Sound im Marketing.',
          },
          {
            script:
              'Durch die Steigerung der emotionalen Aufladung, Differenzierung und Wiedererkennbarkeit kann Musik das Markenprofil verbessern und die Media-Effizienz erhöhen.',
            note: 'Die Vorteile von Musik für Marken erläutern.',
          },
          {
            script:
              'Wer möchte seine Erfahrungen teilen? Hat Musik schon einmal Ihre Entscheidungen beeinflusst?',
            note: 'Interaktive Diskussion mit den Studierenden anregen.',
          },
        ],
        component: Module1PsychologieComponent,
      },
      {
        id: 4,
        title: 'Zusammenfassung des Moduls',
        subtitle: '1.4 Zusammenfassung',
        description: 'Schlüsselkonzepte zusammenfassen',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Zusammenfassend haben wir gesehen, wie wichtig Klang in der Kommunikation ist und wie er das Kaufverhalten beeinflusst.',
            note: 'Die Hauptpunkte des Moduls zusammenfassen.',
          },
          {
            script:
              'Im nächsten Modul werden wir uns genauer mit Corporate Sound im Kontext der Markenidentität befassen.',
            note: 'Überleitung zum nächsten Modul herstellen.',
          },
        ],
        component: Module1ZusammenfassungComponent,
      },
    ],
    comments: [
      {
        type: 'question',
        note: 'Frage stellen: Welche Marken wurden im Audio-Quiz erkannt, und was ist dabei besonders in Erinnerung geblieben?',
        slide: 1,
      },
      {
        type: 'note',
        note: 'Die emotionale Wirkung von Klängen auf die Zuhörer sollte betont werden.',
        slide: 2,
      },
      {
        type: 'übergang',
        note: 'Die historischen Beispiele mit modernen Anwendungen von Corporate Sound verbinden.',
        slide: 2,
      },
      {
        type: 'important',
        script:
          'Klang beeinflusst uns also durch Emotionen, die wir als Kreative gezielt einsetzen können.',
        note: 'Die gezielte Nutzung von Klang in der Beeinflussung des Konsumverhaltens hervorheben.',
        slide: 3,
      },
      {
        type: 'discussion',
        note: 'Diskussion anregen: Welche Musikarten könnten welche Kaufentscheidungen beeinflussen?',
        slide: 3,
      },
    ],
  },
  {
    id: 2,
    title: 'Corporate Sound im Kontext von Markenidentität',
    duration: '45 Minuten',
    color: '#4CAF50',
    sections: [
      {
        id: 5,
        title: 'Was ist Corporate Design?',
        subtitle: '2.1 Was ist Corporate Design?',
        description:
          'Definition und Beispiele für Corporate Design im Rahmen der Markenidentität. Diskussion über visuelle und auditive Elemente.',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Corporate Design umfasst visuelle Markenelemente wie Logo, Farbsystem, Typografie und Bildsprache.',
            note: 'Einführung in visuelle Markenelemente geben.',
          },
          {
            script:
              'Warum nutzen wir nicht auch Sound als Teil der Corporate Identity?',
            note: 'Diskussion über die Integration von Sound in die Markenidentität anregen.',
          },
          {
            script:
              'Es gibt ca. 60.000 visuelle Markenanmeldungen, aber nur ca. 200 Sound Logos. Das zeigt, dass hier noch viel Potenzial besteht.',
            note: 'Vergleich der Markenanmeldungen zur Verdeutlichung des Potenzials von Corporate Sound.',
          },
          {
            script:
              'Von der visuellen Identität können wir zur auditiven Markenkommunikation übergehen und uns fragen: Was sind Farbe, Typografie und Formsprache im Sound?',
            note: 'Übergang von visueller zu auditiver Markenidentität herstellen.',
          },
        ],
        component: Module2WasComponent,
      },
      {
        id: 6,
        title: 'Unterschied zwischen visueller Identität und Sound-Identität',
        subtitle: '2.2 Unterschied zu visueller Identität',
        description:
          'Vergleich zwischen visueller und auditiver Markenidentität und den Herausforderungen der Umsetzung.',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Warum sind visuelle Logos so etabliert, während der auditive Markenauftritt seltener ist? Welche Herausforderungen gibt es?',
            note: 'Diskussion über die Gründe für die Unterschiede in der Bekanntheit.',
          },
          {
            script:
              'Lassen Sie uns von den theoretischen Grundlagen zu praktischen Beispielen übergehen und bekannte Sound Logos analysieren.',
            note: 'Übergang zur praktischen Analyse bekannter Sound Logos.',
          },
        ],
        component: Module2UnterschiedComponent,
      },
      {
        id: 7,
        title: 'Elemente des Corporate Sounds',
        subtitle: '2.3 Elemente als Werkzeug des Corporate Sounds',
        description:
          'Untersuchung der verschiedenen Elemente eines Corporate Sounds und deren Rolle in der Markenidentität.',
        duration: '30 Minuten',
        activities: [
          {
            script:
              'Es gibt verschiedene akustische Markenelemente mit unterschiedlichen Eigenschaften.',
            note: 'Übersicht der akustischen Markenelemente einleiten.',
          },
          {
            script:
              'Das Audiologo ist kurz, prägnant und einprägsam. Ein Beispiel dafür ist die Telekom.',
            note: 'Beispiel für ein Audiologo geben.',
          },
          {
            script:
              'Ein Jingle ist ein melodisches Stück mit Text, meist gesungen. Beispiel: Milka.',
            note: 'Beispiel für einen Jingle erläutern.',
          },
          {
            script:
              'Die Markenstimme ist eine spezifische Sprechstimme für die verbale Kommunikation. Beispiele sind VW mit "Das Auto" oder IKEA.',
            note: 'Beispiele für Markenstimmen nennen.',
          },
          {
            script:
              'Ein Markenlied ist ein Lied, das für eine Marke steht. Beispiel: "Like Ice in the Sunshine" von Langnese.',
            note: 'Beispiel für ein Markenlied geben.',
          },
          {
            script:
              'Ein Soundscape ist ein atmosphärischer Klangraum für Verkaufsräume oder Medien. Beispiel: Telefonansagen von Bayer.',
            note: 'Beispiel für ein Soundscape erläutern.',
          },
          {
            script:
              'Lassen Sie uns eine Aktivität machen: Raten Sie, welche Marke zu welchem Element gehört, und diskutieren Sie deren Wirkung.',
            note: 'Interaktive Aktivität mit den Studierenden durchführen.',
          },
          {
            script:
              'Wie können akustische Logos visuelle Logos unterstützen? Schauen wir uns dazu einige Bildbeispiele an.',
            note: 'Diskussion über die Unterstützung zwischen akustischen und visuellen Logos.',
          },
        ],
        component: Module2ElementeComponent,
      },
      {
        id: 8,
        title: 'Zusammenfassung des Moduls',
        subtitle: '2.4 Zusammenfassung',
        description:
          'Zusammenfassung der Konzepte des Corporate Sounds im Kontext der Markenidentität.',
        duration: '5 Minuten',
        activities: [
          {
            script:
              'Wir haben die verschiedenen Elemente des Corporate Sounds und ihre Rolle in der Markenidentität kennengelernt.',
            note: 'Hauptpunkte des Moduls zusammenfassen.',
          },
        ],
        component: Module2ZusammenfassungComponent,
      },
    ],
    comments: [
      {
        type: 'note',
        note: 'Erklären, wie Corporate Sound im Markenaufbau eine emotionale Verbindung schafft.',
        slide: 5,
      },
      {
        type: 'übergang',
        note: 'Von den theoretischen Grundlagen zu praktischen Beispielen überleiten.',
        slide: 6,
      },
      {
        type: 'important',
        script:
          'Es gibt unterschiedliche Herausforderungen bei visueller und auditiver Markenidentität, die wir beachten müssen.',
        note: 'Die Unterschiede in der Umsetzung hervorheben.',
        slide: 7,
      },
      {
        type: 'question',
        note: 'Was macht ein Audio-Logo einprägsam, und wie kann es eine Marke repräsentieren?',
        slide: 7,
      },
      {
        type: 'discussion',
        note: 'Diskussion darüber, warum visuelle Logos oft bekannter sind als Audio Logos.',
        slide: 7,
      },
    ],
  },
  {
    id: 3,
    title: 'Analyse und Bewertung von Corporate Sound',
    duration: '45 Minuten',
    color: '#9C27B0',
    sections: [
      {
        id: 9,
        title: 'Touchpoints der Markenkommunikation',
        subtitle: '3.1 Touchpoints der Markenkommunikation',
        description:
          'Identifikation von Berührungspunkten, an denen Marken mit Konsumenten interagieren.',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Marken interagieren mit Konsumenten an verschiedenen Touchpoints wie Werbung, Radio, TV, Point of Sale und neuen Medien wie Social Media.',
            note: 'Die verschiedenen Touchpoints aufzählen.',
          },
          {
            script:
              'Jetzt möchten wir von den Touchpoints zur Analyse der Effektivität von Sound Logos an diesen Stellen übergehen.',
            note: 'Übergang zur Analyse herstellen.',
          },
        ],
        component: Module3TouchpointsComponent,
      },
      {
        id: 10,
        title: 'Kriterien für effektiven Corporate Sound',
        subtitle: '3.2 Kriterien für effektiven Corporate Sound',
        description:
          'Analyse der Schlüsselmerkmale, die einen erfolgreichen Corporate Sound ausmachen.',
        duration: '20 Minuten',
        activities: [
          {
            script:
              'Die Beurteilungskriterien für Sound Logos sind Prägnanz, Unterscheidbarkeit, Flexibilität, Wiedererkennungswert und Markenpassung.',
            note: 'Die Kriterien erläutern.',
          },
          {
            script:
              'Zum Beispiel ist das Telekom Sound Logo flexibel und kann für verschiedene Anwendungen angepasst werden, während Audi an einer starren Struktur festhält.',
            note: 'Vergleich zwischen Telekom und Audi darstellen.',
          },
          {
            script:
              'Telekom erreicht hohe Flexibilität durch Anpassbarkeit, während Audi starr bleibt.',
            note: 'Beispielhafte Bewertung geben.',
          },
          {
            script:
              'Lassen Sie uns eine Aktivität durchführen: Analysieren Sie die Logos nach den Kriterien und diskutieren Sie über Beispiele wie BMW und Audi.',
            note: 'Interaktive Analyse mit den Studierenden durchführen.',
          },
          {
            script:
              'Bei der Gestaltung eines Soundlogos tragen wir eine Verantwortung gegenüber der Marke.',
            note: 'Die Bedeutung der Markenverantwortung betonen.',
          },
        ],
        component: Module3KriterienComponent,
      },
      {
        id: 11,
        title:
          'Case Studies: Erfolgreiche und weniger erfolgreiche Corporate Sounds',
        subtitle:
          '3.3 Case Studies: Erfolgreiche und weniger erfolgreiche Corporate Sounds',
        description:
          'Untersuchung von Fallstudien zu Corporate Sounds und deren Auswirkungen.',
        duration: '20 Minuten',
        activities: [
          {
            script:
              'Schauen wir uns die Fallstudie McDonald’s an: Häufiger Wechsel des Audio Logos führt zu inkonstanter Markenwahrnehmung.',
            note: 'Fallstudie McDonald’s erläutern.',
          },
          {
            script:
              'Bei BMW verkörpert der Sound die Marke, aber Unterschiede zwischen altem und neuem Logo beeinträchtigen den Markenaufbau.',
            note: 'Fallstudie BMW besprechen.',
          },
          {
            script:
              'Mercedes hatte Probleme mit der Konsistenz des Sound Logos, was zu einem Kursverlust von 9% führte.',
            note: 'Fallstudie Mercedes erläutern.',
          },
          {
            script:
              'Das Soundlogo von Telekom hat das Piano für die Marke gebrandet; jedes Piano erinnert an die Telekom.',
            note: 'Fallstudie Telekom besprechen.',
          },
          {
            script:
              'Was macht also ein erfolgreiches Sound Branding aus, und welche Fehler sollten vermieden werden?',
            note: 'Diskussion über Erfolgsfaktoren und Fehler anregen.',
          },
        ],
        component: Module3CaseStudiesComponent,
      },
      {
        id: 12,
        title: 'Zusammenfassung des Moduls',
        subtitle: '3.4 Zusammenfassung',
        description:
          'Zusammenfassung der Hauptpunkte und Vorbereitung auf das nächste Modul.',
        duration: '5 Minuten',
        activities: [
          {
            script:
              'Wir haben die Kriterien für effektiven Corporate Sound und verschiedene Fallstudien besprochen.',
            note: 'Die Schlüsselkonzepte zusammenfassen.',
          },
        ],
        component: Module3ZusammenfassungComponent,
      },
    ],
    comments: [
      {
        type: 'important',
        script:
          'Prägnanz und Wiedererkennbarkeit sind entscheidende Kriterien für Corporate Sound.',
        note: 'Die Schlüsselkonzepte betonen.',
        slide: 10,
      },
      {
        type: 'note',
        note: 'Fallstudien dienen als Inspiration; die wichtigsten Lernergebnisse betonen.',
        slide: 11,
      },
      {
        type: 'übergang',
        note: 'Die Studierenden auf die praktische Anwendung im nächsten Modul vorbereiten.',
        slide: 12,
      },
      {
        type: 'question',
        note: 'Welche Kriterien machen ein Audio-Logo stark und unverwechselbar?',
        slide: 10,
      },
      {
        type: 'discussion',
        note: 'Diskussion darüber, wie unterschiedliche Sounds die Wahrnehmung einer Marke beeinflussen.',
        slide: 11,
      },
    ],
  },
  {
    id: 4,
    title: 'Praxis der Entwicklung und Implementierung von Corporate Sound',
    duration: '1,5 Stunden',
    color: '#3F51B5',
    sections: [
      {
        id: 13,
        title: 'Prozess der Entwicklung eines Corporate Sounds',
        subtitle: '4.1 Prozess der Entwicklung eines Corporate Sounds',
        description:
          'Schritte und Methoden zur Erstellung eines effektiven Corporate Sounds.',
        duration: '30 Minuten',
        activities: [
          {
            script:
              'Der Entwicklungsprozess umfasst Markenanalyse, Konzeptentwicklung, Komposition, Testing, Feedback und Implementierung.',
            note: 'Die einzelnen Schritte erläutern.',
          },
          {
            script:
              'Bei der Gestaltung eines Soundlogos tragen wir eine Verantwortung gegenüber der Marke, ihre Werte und Identität angemessen zu repräsentieren.',
            note: 'Die Bedeutung der Markenverantwortung betonen.',
          },
          {
            script:
              'Wie geht man konkret bei der Entwicklung eines Sound Logos vor? Lassen Sie uns das näher betrachten.',
            note: 'Den praktischen Ansatz erläutern.',
          },
        ],
        component: Module4ProzessComponent,
      },
      {
        id: 14,
        title: 'Anwendungsbeispiele und praktische Übung',
        subtitle: '4.2 Anwendungsbeispiele und praktische Übung',
        description:
          'Praxisbezogene Übungen zur Entwicklung eines Corporate Sounds.',
        duration: '45 Minuten',
        activities: [
          {
            script:
              'Schauen wir uns Beispiele wie die Deutsche Bahn und Bayer an und deren Corporate Sound Strategien.',
            note: 'Anwendungsbeispiele präsentieren.',
          },
          {
            script:
              'Jetzt entwickeln Sie in Gruppen ein Konzept für den Corporate Sound einer fiktiven Marke und präsentieren es anschließend.',
            note: 'Praktische Übung mit den Studierenden durchführen.',
          },
          {
            script:
              'Wir hören uns auch Beispiele von OPEL, LG, ZDF Heute, MTV und anderen an.',
            note: 'Weitere Beispiele anspielen.',
          },
        ],
        component: Module4AnwendungsbeispieleComponent,
      },
      {
        id: 15,
        title: 'Branchenüberblick und Potenzial',
        subtitle: '4.3 Branchenüberblick und Potenzial',
        description:
          'Analyse des Marktes für Corporate Sound und zukünftige Möglichkeiten.',
        duration: '30 Minuten',
        activities: [
          {
            script:
              'Es gibt 60.000 visuelle Logos gegenüber nur 200 akustischen Logos (Stand 2012). Das zeigt ein großes Marktpotenzial.',
            note: 'Das Marktpotenzial verdeutlichen.',
          },
          {
            script:
              'Neue Medien wie YouTube, TikTok und Instagram bieten zusätzliches Potenzial für Corporate Sound.',
            note: 'Die Rolle neuer Medien erläutern.',
          },
          {
            script:
              'Für Musiker ergeben sich Chancen als alternative Einnahmequellen mit großen Investitionssummen der Industrie.',
            note: 'Chancen für Musiker aufzeigen.',
          },
          {
            script:
              'Welche Branchen haben Ihrer Meinung nach besonderes Potenzial im Bereich Sound Branding?',
            note: 'Diskussion mit den Studierenden anregen.',
          },
        ],
        component: Module4BranchenueberblickComponent,
      },
      {
        id: 16,
        title:
          'Rechte und Schutz von Audioelementen: Urheberrecht und Markenrecht',
        subtitle: '4.4 Rechte und Schutz von Audioelementen',
        description:
          'Rechtliche Aspekte beim Schutz von akustischen Marken und Herausforderungen dabei.',
        duration: '30 Minuten',
        activities: [
          {
            script:
              'Wie lassen sich akustische Marken schützen, und welche Herausforderungen gibt es dabei?',
            note: 'Einführung in das Thema Rechtsschutz.',
          },
          {
            script:
              'Das Audi-Logo zum Beispiel ist schwer in einer Partitur darzustellen, was den Schutz erschwert.',
            note: 'Beispiel des Audi-Logos erläutern.',
          },
          {
            script:
              'Für die Anmeldung akustischer Marken ist oft eine schriftliche Form wie Noten erforderlich.',
            note: 'Anforderungen für die Markenanmeldung erklären.',
          },
          {
            script:
              'Es ist wichtig, Nutzungsrechte frühzeitig zu klären, um Verwertungsansprüche Dritter zu vermeiden.',
            note: 'Urheberrechtliche Fragen besprechen.',
          },
          {
            script:
              'Wir müssen zwischen Urheberrecht und Wettbewerbsrecht unterscheiden.',
            note: 'Unterschiede erläutern.',
          },
        ],
        component: Module4RechteComponent,
      },
      {
        id: 17,
        title: 'Abschlussdiskussion und Zusammenfassung',
        subtitle: '4.5 Abschlussdiskussion und Zusammenfassung',
        description:
          'Reflexion über die Lerninhalte und Diskussion zukünftiger Entwicklungen.',
        duration: '15 Minuten',
        activities: [
          {
            script:
              'Zum Abschluss möchte ich eine Feedbackrunde machen. Welche Eindrücke und Erkenntnisse haben Sie zur Rolle von Corporate Sound gewonnen?',
            note: 'Abschlussdiskussion anregen.',
          },
        ],
        component: AbschlussComponent,
      },
    ],
    comments: [
      {
        type: 'note',
        note: 'Die Schritte des Sounddesign-Prozesses klar und nachvollziehbar strukturieren.',
        slide: 13,
      },
      {
        type: 'important',
        script:
          'Corporate Sound hat großes Potenzial, besonders in neuen Branchen.',
        note: 'Das Potenzial hervorheben.',
        slide: 15,
      },
      {
        type: 'question',
        note: 'Wie könnten Unternehmen Corporate Sound innovativ nutzen?',
        slide: 15,
      },
      {
        type: 'note',
        note: 'Der Schutz akustischer Marken ist herausfordernd, besonders wenn sie schwer zu notieren sind.',
        slide: 16,
      },
      {
        type: 'discussion',
        note: 'Unterschiede zwischen Urheber- und Wettbewerbsrecht in Bezug auf akustische Marken diskutieren.',
        slide: 16,
      },
      {
        type: 'übergang',
        note: 'Die wichtigsten Lernpunkte zusammenfassen und zur Abschlussdiskussion überleiten.',
        slide: 17,
      },
    ],
  },
];
