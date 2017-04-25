Attribute VB_Name = "NewMacros"
Sub Настройка()
End Sub
Sub Макрос1()
Attribute Макрос1.VB_ProcData.VB_Invoke_Func = "Normal.NewMacros.Макрос1"
    Selection.Font.Name = "Times New Roman"
    Selection.Font.Size = 12
    With Selection.ParagraphFormat
        .LineSpacing = LinesToPoints(1.25)
        .FirstLineIndent = CentimetersToPoints(1.2)
    End With
End Sub
