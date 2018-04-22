#include <GUI/GUI.h>
#include <Button/Button.h>
#include <Picture/Picture.h>
#include <Transformer/Transformer.h>
#include <SFML/System.hpp>
#include <Edit/Edit.h>
#include <Label/Label.h>
#include <string>
#include <iostream>

#include <Panel/Panel.h>
#include <Table/Table.h>
#include <Timer/Timer.h>



pEdit edit;
pLabel label;
pPicture picture;
pPicture picture1;

//���������� ��� ������
void my_button_handler(pComponentModel model, int x, int y, int button)
{
    //����������� ����� �� ���� �����
    std::string text = edit->Model()->Text();
    //������������� ��� � label
    label->Model()->SetCaption(text);
}

void swap_chairs()
{
    sf::Vector2f coord_buffer = picture->Model()->LocalCoord();
    picture->Model()->SetLocalCoord(picture1->Model()->LocalCoord());
    picture1->Model()->SetLocalCoord(coord_buffer);
}

int main()
{
    //������� ������� ���������, �� �������� �� ������ ����
    pGUI gui = new GUI(800, 600, "SKBGUI");
    //-----------�������� �����������---------
    ///////////////////������
    //�������
    pButton button = new Button();
    //���������� ������� �� ������
    button->Model()->SetCaption("Set label value");
    //��������� � gui
    gui->Model()->Add(button);
    //�������� ���������� �� ������� ������
    button->Controller()->SetMouseDown(my_button_handler);
    //������ ����� ��� ���� �����������:
    //������ ��������� ���������� ������������ ������
    button->Model()->SetLocalCoord(300, 10);
    //������ �������
    button->Model()->SetSize(200, 50);


    //////////////////////������
    pPanel panel = new Panel();
    panel->Model()->SetLocalCoord(10, 10);
    panel->Model()->SetSize(280, 580);
    //������� ����� ��� ������
    panel->Model()->SetColor(sf::Color(0xddffddff));

    gui->Model()->Add(panel);

    ////////////////���� �����
    edit = new Edit();
    //���������� �����
    edit->Model()->SetText("Hello");

    edit->Model()->SetLocalCoord(300, 70);
    edit->Model()->SetSize(200, 25);
    edit->Model()->SetTextColor(sf::Color(0x000000ff));
    gui->Model()->Add(edit);

    //������� ���� edit'�
    edit->Model()->SetFillColor(sf::Color(0xB0EFFFff));

    ////////////������� (��������� ������)
    label = new Label();
    //���������� �����
    label->Model()->SetCaption("My label");

    label->Model()->SetLocalCoord(300, 100);
    label->Model()->SetSize(250, 40);
    gui->Model()->Add(label);


    //////////////////////�����������
    picture = new Picture();
    //��������� ��������
    picture->Model()->LoadFromFile("assets/images/chair.png");

    picture->Model()->SetLocalCoord(300, 150);
    picture->Model()->SetSize(250, 400);

    gui->Model()->Add(picture);

    picture1 = new Picture();
    //��������� ��������
    picture1->Model()->LoadFromFile("assets/images/chair1.png");

    picture1->Model()->SetLocalCoord(1600, 1150);
    picture1->Model()->SetSize(250, 400);

    gui->Model()->Add(picture1);

    //������� �������
    pTable table = new Table();
    //������� �������
    table->Model()->SetLocalCoord(5,5);
    //������ ���������� �������
    table->Model()->SetColCount(3);
    //������ ��������� �����
    table->Model()->SetRowCount(7);
    //������ ������ �������
    table->Model()->SetColWidth(0, 30);
    //������ ������ �����
    table->Model()->SetRowHeight(0, 15);
    //��������� � ������� �������...
    table->Model()->Cell(0, 0)->Model()->SetText("No");
     table->Model()->Cell(0, 0)->Model()->SetFillColor(sf::Color(0xB0EFFFff));
    table->Model()->Cell(0, 1)->Model()->SetText("Time");
     table->Model()->Cell(0, 1)->Model()->SetFillColor(sf::Color(0xB0EFFFff));
    table->Model()->Cell(0, 2)->Model()->SetText("Name");
     table->Model()->Cell(0, 2)->Model()->SetFillColor(sf::Color(0xB0EFFFff));

    for (int i = 1; i <=6; i++){
        pEdit edit = table->Model()->Cell(i, 0);
        std::string s = std::to_string(i);
        edit->Model()->SetText(s);
        edit->Model()->SetFillColor(sf::Color(0xB0EFFFff));
    }


    //��������� �� ������
    panel->Model()->Add(table);


    //�������� ������
    pTimer timer = new Timer();
    //���������� ��������
    timer->Model()->SetInterval(sf::milliseconds(500));
    //���������� ���������� �� ������
    timer->Model()->SetOnTimer(swap_chairs);
    //�������� ������
    gui->Model()->Add(timer);
    //��������� ������
    timer->Model()->SetEnabled(true);







    //"�������" ����, ��������� ��� ����������� �� ��������������
    //������� �������� ���� ������, ����� ���� ����� �������
    gui->loop();
    return 0;
}


