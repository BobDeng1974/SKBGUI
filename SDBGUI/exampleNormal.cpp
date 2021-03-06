#include <GUI/GUI.h>
#include <Button/Button.h>
#include <Picture/Picture.h>
#include <Transformer/Transformer.h>
#include <TransformerRXY/TransformerRXY.h>
#include <SFML/System.hpp>
#include <Edit/Edit.h>
#include <Label/Label.h>
#include <string>
#include <iostream>
#include <sensor/sensor.h>
#include <Panel/Panel.h>
#include <Table/Table.h>
#include <Timer/Timer.h>
#include <Animation/Animation.h>
#include <CircleCollider/CircleCollider.h>
#include <BoxCollider/BoxCollider.h>
#include <CheckBox/CheckBox.h>

#include <ProgressBar/ProgressBar.h>

pEdit edit;
pLabel label;
pPicture picture;
pPicture picture1;
pProgressBar pb;
pAnimation animation;
pAnimation portal;
pWorld world;
pCircleCollider MyCircle;
pCircleCollider MyCircle2;
pBoxCollider ground;
pButton saveButton;
pButton loadButton;
pButton circleButton;
pEdit QuantEdit;
psensor Sensor2;
pTransformer t;
pPicture wheel;

void my_contact_handler(pCircleColliderModel collider){
    //collider->Body()->ApplyLinearImpulseToCenter(b2Vec2(100000, 100000), true);
    collider->ApplyMomentum(100000,100000);
    //collider->ApplyForce(100000,100000);
    ground->Model()->SetAngle(ground->Model()->Angle() - 3.0);
}

void my_contact_handler1(pCircleColliderModel collider){
    collider->Body()->SetLinearVelocity(b2Vec2(0,0));
    MyCircle2->Model()->SetLocalCoord(100,75);
    ground->Model()->SetAngle(ground->Model()->Angle() + 3.0);
    //ground->Model()->Move(sf::Vector2f(5,0));
}



//обработчик для кнопки
void my_button_handler(pComponentModel model, int x, int y, int button)
{
    //вытаскиваем текст из поля ввода
    sf::String text = edit->Model()->Text();
    //устанавливаем его в label
    label->Model()->SetCaption(text);

}

void swap_chairs()
{

    //wheel->Model()->Rotate(1.0);
    std::cout << wheel->Model()->Angle() << std::endl;
}

int main()
{
    //создаем главный компонент, он отвечает за работу окна
    pGUI gui = new GUI(800, 600, "SKBGUI");
    QuantEdit= new Edit();
    QuantEdit->Model()->SetLocalCoord(300,0);
    QuantEdit->Model()->SetText("0.25");
    pWorld world = new World();
    gui->Model()->Add(world);
    world->Model()->setUpEdit(QuantEdit);
    ground = new BoxCollider(world, 700, 10, "static");
    ground->Model()->SetLocalCoord(50, 450);
    gui->Model()->Add(ground);
    Sensor2= new sensor(world->Model()->GetWorld(), 99,140,"123",25);
    Sensor2->Model()->SetOnContact(my_contact_handler);

    psensor Sensor1= new sensor(world->Model()->GetWorld(), 700,440,"123",25);
    Sensor1->Model()->SetOnContact(my_contact_handler1);
    gui->Model()->Add(Sensor1);

    //Sensor->Model()->SetLocalCoord(79,300);
    pButton saveButton = new Button();
    pButton circleButton = new Button();
    circleButton->Model()->SetCaption("CircleCollider");
    circleButton->Model()->SetLocalCoord(450,0);
    saveButton->Model()->SetCaption("Save");
    saveButton->Model()->SetLocalCoord(0,0);
    pButton loadButton = new Button();
    loadButton->Model()->SetCaption("Load");
    loadButton->Model()->SetLocalCoord(150,0);

    //psensor Sensor = new sensor(50,50,"circle",50);
    //Создадим таймер
    pTimer timer = new Timer();
    //Установить интервал
    timer->Model()->SetInterval(sf::milliseconds(500));
    //Установить обработчик на таймер
    timer->Model()->SetOnTimer(swap_chairs);
    //Добавить таймер
    gui->Model()->Add(timer);
   // gui->Model()->Add(saveButton);
   // gui->Model()->Add(loadButton);
    gui->Model()->Add(Sensor2);
    //запускаем таймер
    timer->Model()->SetEnabled(true);

//    Sensor->Model()->setWorld(world->Model()->GetWorld());
//    Sensor->Model()->createBody();
    //MyCircle = new CircleCollider(world,25,"dynamic");
    //MyCircle->Model()->SetLocalCoord(200,150);
    MyCircle2 = new CircleCollider(world,25,"dynamic");
    MyCircle2->Model()->SetLocalCoord(100,75);
    //gui->Model()->Add(MyCircle);
    gui->Model()->Add(MyCircle2);
   // gui->Model()->Add(circleButton);
    MyContactListener contactListener;
    world->Model()->GetWorld()->SetContactListener(&contactListener);
    gui->Model()->Add(QuantEdit);

    t = new Transformer();
   // t->Model()->SetTarget(MyCircle2);
    gui->Model()->Add(t);

    pTransformerRXY t1 = new TransformerRXY();
    t1->Model()->SetTarget(Sensor1);
    gui->Model()->Add(t1);

    animation = new Animation();
    animation->Model()->setTilesCount(sf::Vector2f(8,4));

    animation->Model()->setInterval(sf::seconds(0.05));
    animation->Model()->SetSize(sf::Vector2f(100,200));
    animation->Model()->loadFromFile("assets/images/fire.png");
    animation->Model()->SetLocalCoord(Sensor1->Model()->LocalCoord()+sf::Vector2f(-25,-120));

    gui->Model()->Add(animation);

    portal = new Animation();
    portal->Model()->setTilesCount(sf::Vector2f(5,5));

    portal->Model()->setInterval(sf::seconds(0.05));
    portal->Model()->SetSize(sf::Vector2f(100,100));
    portal->Model()->loadFromFile("assets/images/portal.png");
    portal->Model()->SetLocalCoord(Sensor2->Model()->LocalCoord()+sf::Vector2f(-25,-25));

    gui->Model()->Add(portal);
    wheel = new Picture();
    wheel->Model()->LoadFromFile("assets/images/wheel.png");
    wheel->Model()->SetSize(50,50);
    //wheel->Model()->SetLocalCoord(100,100);
    MyCircle2->Model()->Add(wheel);
    //std::cout << (void*)wheel->Model()->Parent() << std::endl;

    //MyCircle2->Model()->Body()->SetTransform(b2Vec2(400,300), 0.0);

//    pCheckBox checkbox = new CheckBox();
//    checkbox->Model()->SetLocalCoord(10, 180);
//    std::string s = "Test";
//    s[0] = 0x04;
//    s[1] = 0x1b;
//    checkbox->Model()->SetCaption(s);
//    panel->Model()->Add(checkbox);










    //"Оживить" окно, заставить его реагировать на взаимодействие
    //функция завершит свою работу, когда окно будет закрыто
    gui->loop();
    return 0;
}

